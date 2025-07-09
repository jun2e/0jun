let vandalQuizData = [
    { image: '밴달/SYS.webp', answer: 'SYS' },
    { image: '밴달/2021챔피언스.webp', answer: '2021챔피언스' },
    { image: '밴달/별빛 오디세이.webp', answer: '별빛 오디세이' },
    { image: '밴달/불멸.webp', answer: '불멸' },
    { image: '밴달/늑대인간.webp', answer: '늑대인간' },
    { image: '밴달/스키마.webp', answer: '스키마' },
    { image: '밴달/니트로.webp', answer: '니트로' },
    { image: '밴달/KTAC.webp', answer: 'KTAC' },
    { image: '밴달/심해.webp', answer: '심해' },
    { image: '밴달/카발리에.webp', answer: '카발리에' },
    { image: '밴달/몰락.webp', answer: '몰락' },
    { image: '밴달/하이브마인드.webp', answer: '하이브마인드' },
    { image: '밴달/아이온.webp', answer: '아이온' },
    { image: '밴달/크림슨비스트.webp', answer: '크림슨비스트' },
    { image: '밴달/크로노보이드.webp', answer: '크로노보이드' },
    { image: '밴달/사마드.webp', answer: '사마드' },
    { image: '밴달/혼돈의 서막.webp', answer: '혼돈의 서막' },
    { image: '밴달/넵튠.webp', answer: '넵튠' },
    { image: '밴달/티탄메일.webp', answer: '티탄메일' },
    { image: '밴달/엔데버.webp', answer: '엔데버' },
    { image: '밴달/팀 에이스.webp', answer: '팀 에이스' },
    { image: '밴달/가이아의 복수.webp', answer: '가이아의 복수' },
    { image: '밴달/눈까 올비다도스.webp', answer: '눈까 올비다도스' },
    { image: '밴달/RGX11z프로.webp', answer: 'RGX11z프로' },
    { image: '밴달/발로란트GOVOL2.webp', answer: '발로란트GOVOL2' },
    { image: '밴달/빛의 감시자.webp', answer: '빛의 감시자' },
    { image: '밴달/오리진.webp', answer: '오리진' },
    { image: '밴달/결속된 세계.webp', answer: '결속된 세계' },
    { image: '밴달/포세이큰.webp', answer: '포세이큰' },
    { image: '밴달/실바누스.webp', answer: '실바누스' },
    { image: '밴달/글리치팝.webp', answer: '글리치팝' },
    { image: '밴달/호라이즌.webp', answer: '호라이즌' },
    { image: '밴달/프리즘2.webp', answer: '프리즘2' },
    { image: '밴달/윈터원더랜드.webp', answer: '윈터원더랜드' },
    { image: '밴달/센세이션.webp', answer: '센세이션' },
    { image: '밴달/황무지.webp', answer: '황무지' },
    { image: '밴달/약탈자.webp', answer: '약탈자' },
    { image: '밴달/원탭.webp', answer: '원탭' },
    { image: '밴달/엘더플레임.webp', answer: '엘더플레임' },
    { image: '밴달/프라임.webp', answer: '프라임' },
    { image: '밴달/아발란체.webp', answer: '아발란체' },
    { image: '밴달/벚꽃.webp', answer: '벚꽃' },
    { image: '밴달/아리스토크랫.webp', answer: '아리스토크랫' },
    { image: '밴달/럭스.webp', answer: '럭스' }
];

let currentQuiz = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let userAnswers = [];

function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, '');
}

function startQuiz(count) {
    currentQuiz = [...vandalQuizData].sort(() => Math.random() - 0.5).slice(0, count);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userAnswers = [];
    document.querySelector('.quiz-options').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = currentQuiz[currentQuestionIndex];
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="vandal-image-container">
                <img src="${question.image}" alt="밴달 스킨 이미지" class="vandal-image">
            </div>
            <div class="input-container">
                <input type="text" class="answer-input" placeholder="스킨 이름을 입력하세요" onkeypress="checkAnswer(event)">
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
            userAnswer: userAnswer,
            correctAnswer: correctAnswer
        });
        if (normalize(userAnswer) === normalize(correctAnswer)) {
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
    if (oldButton) oldButton.remove();
    const oldSheet = quizResult.querySelector('.answer-sheet');
    if (oldSheet) oldSheet.remove();
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
            <div class="answer-item ${normalize(item.userAnswer) === normalize(item.correctAnswer) ? 'correct' : 'incorrect'}">
                <div class="question-number">문제 ${index + 1}</div>
                <div class="answer-info">
                    <div class="vandal-image-container">
                        <img src="${item.question}" alt="밴달 스킨 이미지" class="vandal-image">
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