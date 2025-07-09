let currentQuiz = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let userAnswers = [];
let pokemonCache = new Map(); // 포켓몬 데이터 캐시

async function fetchPokemonData(count) {
    const pokemonData = [];
    const usedIds = new Set();
    
    // 랜덤 ID 목록 생성
    const randomIds = [];
    while (randomIds.length < count) {
        const randomId = Math.floor(Math.random() * 898) + 1;
        if (!usedIds.has(randomId)) {
            usedIds.add(randomId);
            randomIds.push(randomId);
        }
    }
    
    // 병렬로 API 호출
    const promises = randomIds.map(async (id) => {
        try {
            // 캐시된 데이터가 있으면 사용
            if (pokemonCache.has(id)) {
                return pokemonCache.get(id);
            }

            // 포켓몬 데이터 가져오기
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            
            // 종 데이터 가져오기
            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();
            
            // 한국어 이름 찾기
            const koreanName = speciesData.names.find(name => name.language.name === 'ko')?.name || data.name;
            
            const pokemonInfo = {
                image: data.sprites.other['official-artwork'].front_default,
                answer: koreanName
            };

            // 캐시에 저장
            pokemonCache.set(id, pokemonInfo);
            
            return pokemonInfo;
        } catch (error) {
            console.error(`포켓몬 ID ${id} 데이터를 가져오는 중 오류 발생:`, error);
            return null;
        }
    });

    // 모든 API 호출이 완료될 때까지 대기
    const results = await Promise.all(promises);
    
    // null이 아닌 결과만 필터링하여 추가
    return results.filter(result => result !== null);
}

async function startQuiz(count) {
    try {
        // 로딩 표시
        const quizContent = document.getElementById('quizContent');
        quizContent.innerHTML = '<div class="loading">포켓몬을 불러오는 중...<br><small>잠시만 기다려주세요</small></div>';
        quizContent.style.display = 'block';
        document.querySelector('.quiz-options').style.display = 'none';
        
        // 데이터 가져오기
        currentQuiz = await fetchPokemonData(count);
        
        // 충분한 데이터를 가져오지 못한 경우
        if (currentQuiz.length < count) {
            throw new Error('충분한 포켓몬 데이터를 가져오지 못했습니다.');
        }
        
        currentQuestionIndex = 0;
        correctAnswers = 0;
        userAnswers = [];
        
        // 첫 번째 문제 표시
        showQuestion();
    } catch (error) {
        console.error('퀴즈 시작 중 오류 발생:', error);
        quizContent.innerHTML = '<div class="error">퀴즈를 불러오는 중 오류가 발생했습니다.<br>다시 시도해주세요.</div>';
    }
}

function showQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = currentQuiz[currentQuestionIndex];
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="pokemon-image-container">
                <img src="${question.image}" alt="포켓몬 이미지" class="pokemon-image">
            </div>
            <div class="input-container">
                <input type="text" class="answer-input" placeholder="포켓몬 이름을 입력하세요 (한글)" onkeypress="checkAnswer(event)">
            </div>
        </div>
    `;
    
    quizContent.querySelector('input').focus();
}

function checkAnswer(event) {
    if (event.key === 'Enter') {
        const userAnswer = document.querySelector('.answer-input').value.trim();
        const correctAnswer = currentQuiz[currentQuestionIndex].answer;
        
        userAnswers.push({
            question: currentQuiz[currentQuestionIndex].image,
            userAnswer: document.querySelector('.answer-input').value.trim(),
            correctAnswer: currentQuiz[currentQuestionIndex].answer
        });
        
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuiz.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    const quizContent = document.getElementById('quizContent');
    const quizResult = document.getElementById('quizResult');
    const accuracy = Math.round((correctAnswers / currentQuiz.length) * 100);
    quizContent.style.display = 'none';
    quizResult.style.display = 'block';
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('accuracy').textContent = accuracy;
    // 기존 버튼/시트 제거
    const oldBtns = quizResult.querySelectorAll('.submit-btn');
    oldBtns.forEach(btn => btn.remove());
    const oldSheet = quizResult.querySelector('.answer-sheet');
    if (oldSheet) oldSheet.remove();
    // 다시 풀기 버튼
    const restartButton = document.createElement('button');
    restartButton.textContent = '다시 풀기';
    restartButton.className = 'submit-btn';
    restartButton.onclick = restartQuiz;
    quizResult.appendChild(restartButton);
    // 정답확인 버튼
    const answerSheetButton = document.createElement('button');
    answerSheetButton.textContent = '정답 확인하기';
    answerSheetButton.className = 'submit-btn';
    answerSheetButton.onclick = showAnswerSheet;
    quizResult.appendChild(answerSheetButton);
}

function showAnswerSheet() {
    const quizResult = document.getElementById('quizResult');

    // 기존 버튼 및 answer-sheet 모두 제거
    const oldButton = quizResult.querySelector('.submit-btn');
    if (oldButton) {
        oldButton.remove();
    }
    const oldSheet = quizResult.querySelector('.answer-sheet');
    if (oldSheet) {
        oldSheet.remove();
    }

    // 다시 풀기 버튼 생성 및 추가 (상단)
    const restartButton = document.createElement('button');
    restartButton.textContent = '다시 풀기';
    restartButton.className = 'submit-btn';
    restartButton.onclick = restartQuiz;
    quizResult.appendChild(restartButton);

    // 정답 확인 시트 생성 및 추가
    const answerSheet = document.createElement('div');
    answerSheet.className = 'answer-sheet';

    let answerSheetHTML = '<h3>정답 확인</h3><div class="answer-list">';

    userAnswers.forEach((item, index) => {
        answerSheetHTML += `
            <div class="answer-item ${item.userAnswer === item.correctAnswer ? 'correct' : 'incorrect'}">
                <div class="question-number">문제 ${index + 1}</div>
                <div class="answer-info">
                    <div class="pokemon-image-container">
                        <img src="${item.question}" alt="포켓몬 이미지" class="pokemon-image">
                    </div>
                    <div class="answer-details">
                        <p>입력한 답: ${item.userAnswer}</p>
                        <p>정답: ${item.correctAnswer}</p>
                    </div>
                </div>
            </div>
        `;
    });

    answerSheetHTML += '</div>';
    answerSheet.innerHTML = answerSheetHTML;

    quizResult.appendChild(answerSheet);
}

function restartQuiz() {
    document.getElementById('quizResult').style.display = 'none';
    document.querySelector('.quiz-options').style.display = 'flex';
    const quizContent = document.getElementById('quizContent');
    quizContent.style.display = 'none';
    quizContent.innerHTML = '';
    userAnswers = [];
} 