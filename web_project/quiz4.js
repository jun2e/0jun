// 퀴즈 데이터
const quizData = [
    {
        image: "음료/비타500.jpg",
        answer: "비타500"
    },
    {
        image: "음료/모구모구.jpg",
        answer: "모구모구"
    },
    {
        image: "음료/몬스터.jpg",
        answer: "몬스터"
    },
    {
        image: "음료/블랙자두.jpg",
        answer: "블랙자두"
    },
    {
        image: "음료/닥터페퍼.jpg",
        answer: "닥터페퍼"
    },
    {
        image: "음료/데미소다.jpg",
        answer: "데미소다"
    },
    {
        image: "음료/갈아만든 배.jpg",
        answer: "갈아만든 배"
    },
    {
        image: "음료/뿌요소다.jpg",
        answer: "뿌요소다"
    },
    {
        image: "음료/피크닉.jpg",
        answer: "피크닉"
    },
    {
        image: "음료/쿠우.jpg",
        answer: "쿠우"
    },
    {
        image: "음료/쌕썍오렌지.jpg",
        answer: "쌕썍오렌지"
    },
    {
        image: "음료/포도봉봉.jpg",
        answer: "포도봉봉"
    },
    {
        image: "음료/사과에이드.jpg",
        answer: "사과에이드"
    },
    {
        image: "음료/아침에 주스.jpg",
        answer: "아침에 주스"
    },
    {
        image: "음료/라무네.jpg",
        answer: "라무네"
    },
    {
        image: "음료/자몽소다.jpg",
        answer: "자몽소다"
    },
    {
        image: "음료/포카리스웨트.jpg",
        answer: "포카리스웨트"
    },
    {
        image: "음료/마운틴 듀.jpg",
        answer: "마운틴 듀"
    },
    {
        image: "음료/2%.jpg",
        answer: "2%"
    },
    {
        image: "음료/옥수수 수염차.jpg",
        answer: "옥수수 수염차"
    },
    {
        image: "음료/헛개차.jpg",
        answer: "헛개차"
    },
    {
        image: "음료/비락식혜.jpg",
        answer: "비락식혜"
    },
    {
        image: "음료/환타 오렌지.jpg",
        answer: "환타 오렌지"
    },
    {
        image: "음료/밀키스.jpg",
        answer: "밀키스"
    },
    {
        image: "음료/파워에이드.jpg",
        answer: "파워에이드"
    },
    {
        image: "음료/게토레이.jpg",
        answer: "게토레이"
    },
    {
        image: "음료/레쓰비 마일드 커피.jpg",
        answer: "레쓰비 마일드 커피"
    },
    {
        image: "음료/바나나맛 우유.jpg",
        answer: "바나나맛 우유"
    },
    {
        image: "음료/칠성사이다.jpg",
        answer: "칠성사이다"
    },
    {
        image: "음료/코카콜라.jpg",
        answer: "코카콜라"
    }
];

let currentQuiz = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let userAnswers = [];

function startQuiz(count) {
    currentQuiz = [...quizData].sort(() => Math.random() - 0.5).slice(0, count);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userAnswers = [];
    
    document.querySelector('.quiz-options').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = currentQuiz[currentQuestionIndex];
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <img src="${question.image}" alt="음료 이미지" class="drink-image">
            <input type="text" class="answer-input" placeholder="음료 이름을 입력하세요" onkeypress="checkAnswer(event)">
        </div>
    `;
    
    quizContent.querySelector('input').focus();
}

function checkAnswer(event) {
    if (event.key === 'Enter') {
        const userAnswer = document.querySelector('.answer-input').value.trim().toLowerCase().replace(/\s+/g, '');
        const correctAnswer = currentQuiz[currentQuestionIndex].answer.toLowerCase().replace(/\s+/g, '');
        
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
    // 기존의 모든 .submit-btn 버튼 제거
    const oldBtns = quizResult.querySelectorAll('.submit-btn');
    oldBtns.forEach(btn => btn.remove());
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
            <div class="answer-item ${item.userAnswer === item.correctAnswer ? 'correct' : 'incorrect'}">
                <div class="question-number">문제 ${index + 1}</div>
                <div class="answer-info">
                    <div class="drink-image-container">
                        <img src="${item.question}" alt="음료 이미지" class="drink-image">
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
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizContent').innerHTML = '';
    userAnswers = [];
} 