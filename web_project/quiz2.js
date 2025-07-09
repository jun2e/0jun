// 퀴즈 데이터
const quizData = [
    {
        question: "완내스",
        answer: "완전 내 스타일"
    },
    {
        question: "국평",
        answer: "국민 평수"
    },
    {
        question: "내봬누",
        answer: "내일 봬요 누나"
    },
    {
        question: "당모치",
        answer: "당연히 모든 치킨은 옳다"
    },
    {
        question: "알잘딱깔센",
        answer: "알아서 잘 딱 깔끔하고 센스있게"
    },
    {
        question: "돔횡챠",
        answer: "도망쳐"
    },
    {
        question: "식집사",
        answer: "식물 기르는 사람"
    },
    {
        question: "주불",
        answer: "주소 불러"
    },
    {
        question: "H워얼v",
        answer: "사랑해"
    },
    {
        question: "ㄱㅂㅈㄱ",
        answer: "가보자고"
    },
    {
        question: "이퇴백",
        answer: "20대에 퇴사하는 백수"
    },
    {
        question: "농협은행",
        answer: "너무 예쁘네"
    },
    {
        question: "이생망",
        answer: "이번 생은 망했다"
    },
    {
        question: "SBN",
        answer: "선배님"
    },
    {
        question: "조용한 사직",
        answer: "최소한의 일만 하면서 회사 다니겠다"
    },
    {
        question: "혼틈",
        answer: "혼란을 틈타"
    },
    {
        question: "청무구사",
        answer: "청약은 무슨 구축 사"
    },
    {
        question: "제당슈만",
        answer: "제가 당신을 슈퍼스타로 만들어 드릴게요"
    },
    {
        question: "팬아저",
        answer: "팬이 아니여도 저장"
    },
    {
        question: "갑통알",
        answer: "갑자기 통장 잔고를 봤더니 알바를 해야 겠다"
    },
    {
        question: "자낳괴",
        answer: "자본주의가 낳은 괴물"
    },
    {
        question: "점메추",
        answer: "점심 메뉴 추천"
    },
    {
        question: "캘박",
        answer: "캘린더 박제"
    },
    {
        question: "좋못사",
        answer: "좋다 못 해 사랑해"
    },
    {
        question: "스불재",
        answer: "스스로 불러온 재앙"
    },
    {
        question: "ㄴㅇㄱ",
        answer: "상상도 못 한 정체"
    },
    {
        question: "맑눈광",
        answer: "맑은 눈의 광인"
    },
    {
        question: "삼귀다",
        answer: "연애 시작전 상태"
    },
    {
        question: "저메추",
        answer: "저녁메뉴추천"
    },
    {
        question: "일취월장",
        answer: "일요일에 취하면 월요일에 장난 아니야"
    }
];

let currentQuiz = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let userAnswers = [];

function startQuiz(count) {
    // 퀴즈 데이터 섞기
    currentQuiz = [...quizData].sort(() => Math.random() - 0.5).slice(0, count);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userAnswers = [];
    
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
            <h2>${question.question}</h2>
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
                <div class="answer-info">
                    <div>줄임말: ${item.question.question}</div>
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
    userAnswers = [];
} 