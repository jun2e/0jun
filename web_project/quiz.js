// 퀴즈 데이터 (실제로는 서버에서 가져와야 함)
const quizData = [
    {
        image: "quiz1/트랄랄레로 트랄랄라.webp",
        answer: "트랄랄레로 트랄랄라"
    },
    {
        image: "quiz1/봄바르디로 크로코딜로.webp",
        answer: "봄바르디로 크로코딜로"
    },
    {
        image: "quiz1/퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르.webp",
        answer: "퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르"
    },
    {
        image: "quiz1/리릴리 라릴라.webp",
        answer: "리릴리 라릴라"
    },
    {
        image: "quiz1/보네카 암발라부.webp",
        answer: "보네카 암발라부"
    },
    {
        image: "quiz1/브르르 브르르 파타핌.webp",
        answer: "브르르 브르르 파타핌"
    },
    {
        image: "quiz1/침팬치니 바나니니.webp",
        answer: "침팬치니 바나니니"
    },
    {
        image: "quiz1/봄봄비니 구지니.webp",
        answer: "봄봄비니 구지니"
    },
    {
        image: "quiz1/카푸치노 아사시노.webp",
        answer: "카푸치노 아사시노"
    },
    {
        image: "quiz1/트리피 트로피.webp",
        answer: "트리피 트로피"
    },
    {
        image: "quiz1/프리고 카멜로.webp",
        answer: "프리고 카멜로"
    },
    {
        image: "quiz1/라 바카 사투르노 사투르니타.webp",
        answer: "라 바카 사투르노 사투르니타"
    },
    {
        image: "quiz1/발레리나 카푸치나.webp",
        answer: "발레리나 카푸치나"
    },
    {
        image: "quiz1/오 딘딘딘딘 둔 마 딘딘딘 둔.webp",
        answer: "오 딘딘딘딘 둔 마 딘딘딘 둔"
    },
    {
        image: "quiz1/지라파 첼레스테.webp",
        answer: "지라파 첼레스테"
    },
    {
        image: "quiz1/보브리토 반디토.webp",
        answer: "보브리토 반디토"
    },
    {
        image: "quiz1/타 타 타 타 타 타 타 타 타 타 타 사후르.webp",
        answer: "타 타 타 타 타 타 타 타 타 타 타 사후르"
    },
    {
        image: "quiz1/팟 핫스팟.webp",
        answer: "팟 핫스팟"
    },
    {
        image: "quiz1/프룰리 프룰라.webp",
        answer: "프룰리 프룰라"
    },
    {
        image: "quiz1/브리 브리 비쿠스 디쿠스 봄비쿠스.webp",
        answer: "브리 브리 비쿠스 디쿠스 봄비쿠스"
    },
    {
        image: "quiz1/트릭 트랙 바라붐.webp",
        answer: "트릭 트랙 바라붐"
    },
    {
        image: "quiz1/코코판토 엘레판토.webp",
        answer: "코코판토 엘레판토"
    },
    {
        image: "quiz1/부르발로니 룰릴롤리.webp",
        answer: "부르발로니 룰릴롤리"
    },
    {
        image: "quiz1/오랑구티니 아나나시니.webp",
        answer: "오랑구티니 아나나시니"
    },
    {
        image: "quiz1/일 칵토 히포포타모.webp",
        answer: "일 칵토 히포포타모"
    },
    {
        image: "quiz1/블루베리니 옥토푸시니.webp",
        answer: "블루베리니 옥토푸시니"
    },
    {
        image: "quiz1/글로르보 프루토드릴로.webp",
        answer: "글로르보 프루토드릴로"
    },
    {
        image: "quiz1/리노 토스트리노.webp",
        answer: "리노 토스트리노"
    },
    {
        image: "quiz1/지브라 주브 라지브라리니.webp",
        answer: "지브라 주브 라지브라리니"
    },
    {
        image: "quiz1/그라이푸시 메두시.webp",
        answer: "그라이푸시 메두시"
    }
];

let currentQuiz = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let userAnswers = []; // 사용자의 답변을 저장할 배열

function startQuiz(count) {
    // 퀴즈 데이터 섞기
    currentQuiz = [...quizData].sort(() => Math.random() - 0.5).slice(0, count);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    
    // 퀴즈 옵션 버튼 숨기기
    document.querySelector('.quiz-options').style.display = 'none';
    
    // 첫 번째 문제 표시
    showQuestion();
}

function showQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = currentQuiz[currentQuestionIndex];
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <img src="${question.image}" alt="퀴즈 이미지">
            <input type="text" class="quiz-input" placeholder="정답을 입력하세요" onkeypress="checkAnswer(event)">
        </div>
    `;
    
    // 입력 필드에 포커스
    quizContent.querySelector('input').focus();
}

function checkAnswer(event) {
    if (event.key === 'Enter') {
        const userAnswer = event.target.value.trim().toLowerCase().replace(/\s+/g, '');
        const correctAnswer = currentQuiz[currentQuestionIndex].answer.toLowerCase().replace(/\s+/g, '');
        
        // 사용자의 답변 저장
        userAnswers.push({
            question: currentQuiz[currentQuestionIndex],
            userAnswer: event.target.value.trim(),
            isCorrect: userAnswer === correctAnswer
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
    
    // 정답 확인 버튼 추가
    const answerSheetButton = document.createElement('button');
    answerSheetButton.textContent = '정답 확인하기';
    answerSheetButton.className = 'answer-sheet-button';
    answerSheetButton.onclick = showAnswerSheet;
    quizResult.appendChild(answerSheetButton);
}

function showAnswerSheet() {
    const quizResult = document.getElementById('quizResult');
    const answerSheet = document.createElement('div');
    answerSheet.className = 'answer-sheet';
    
    // 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
        .answer-sheet {
            margin-top: 20px;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 10px;
        }
        
        .answer-sheet h3 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }
        
        .answer-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .answer-item {
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .answer-item.correct {
            border-left: 4px solid #4CAF50;
        }
        
        .answer-item.incorrect {
            border-left: 4px solid #f44336;
        }
        
        .question-number {
            font-weight: bold;
            margin-bottom: 10px;
            color: #666;
        }
        
        .question-image {
            margin-bottom: 10px;
        }
        
        .question-image img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
        }
        
        .answer-info {
            font-size: 14px;
        }
        
        .answer-info div {
            margin: 5px 0;
        }
        
        .answer-sheet-button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        
        .answer-sheet-button:hover {
            background-color: #1976D2;
        }
    `;
    document.head.appendChild(style);
    
    let answerSheetHTML = '<h3>정답 확인</h3><div class="answer-list">';
    
    userAnswers.forEach((item, index) => {
        answerSheetHTML += `
            <div class="answer-item ${item.isCorrect ? 'correct' : 'incorrect'}">
                <div class="question-number">문제 ${index + 1}</div>
                <div class="question-image">
                    <img src="${item.question.image}" alt="퀴즈 이미지">
                </div>
                <div class="answer-info">
                    <div>입력한 답: ${item.userAnswer}</div>
                    <div>정답: ${item.question.answer}</div>
                </div>
            </div>
        `;
    });
    
    answerSheetHTML += '</div>';
    answerSheet.innerHTML = answerSheetHTML;
    
    // 기존 정답 확인 버튼 제거
    const oldButton = quizResult.querySelector('.answer-sheet-button');
    if (oldButton) {
        oldButton.remove();
    }
    
    quizResult.appendChild(answerSheet);
}

function restartQuiz() {
    document.getElementById('quizResult').style.display = 'none';
    document.querySelector('.quiz-options').style.display = 'flex';
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizContent').innerHTML = '';
    userAnswers = []; // 사용자 답변 초기화
} 