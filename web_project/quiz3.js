// 퀴즈 데이터
const quizData = [
    {
        image: "국기/잠비아.png",
        answer: "잠비아"
    },
    {
        image: "국기/짐바브웨.png",
        answer: "짐바브웨"
    },
    {
        image: "국기/남아프리카 공화국.png",
        answer: "남아프리카 공화국"
    },
    {
        image: "국기/마요트.png",
        answer: "마요트"
    },
    {
        image: "국기/사모아.png",
        answer: "사모아"
    },
    {
        image: "국기/예멘.png",
        answer: "예멘"
    },
    {
        image: "국기/왈리스 푸투나.png",
        answer: "왈리스 푸투나"
    },
    {
        image: "국기/코소보.png",
        answer: "코소보"
    },
    {
        image: "국기/미국령 버진아일랜드.png",
        answer: "미국령 버진아일랜드"
    },
    {
        image: "국기/바누아투.png",
        answer: "바누아투"
    },
    {
        image: "국기/베네수엘라.png",
        answer: "베네수엘라"
    },
    {
        image: "국기/베트남.png",
        answer: "베트남"
    },
    {
        image: "국기/영국령 버진아일랜드.png",
        answer: "영국령 버진아일랜드"
    },
    {
        image: "국기/세인트빈센트 그레나딘.png",
        answer: "세인트빈센트 그레나딘"
    },
    {
        image: "국기/미국.png",
        answer: "미국"
    },
    {
        image: "국기/미국령 군소 제도.png",
        answer: "미국령 군소 제도"
    },
    {
        image: "국기/바티칸 시국.png",
        answer: "바티칸 시국"
    },
    {
        image: "국기/우루과이.png",
        answer: "우루과이"
    },
    {
        image: "국기/우즈베키스탄.png",
        answer: "우즈베키스탄"
    },
    {
        image: "국기/우간다.png",
        answer: "우간다"
    },
    {
        image: "국기/우크라이나.png",
        answer: "우크라이나"
    },
    {
        image: "국기/중화민국.png",
        answer: "중화민국"
    },
    {
        image: "국기/탄자니아.png",
        answer: "탄자니아"
    },
    {
        image: "국기/투발루.png",
        answer: "투발루"
    },
    {
        image: "국기/튀르키예.png",
        answer: "튀르키예"
    },
    {
        image: "국기/트리니다드 토바고.png",
        answer: "트리니다드 토바고"
    },
    {
        image: "국기/통가.png",
        answer: "통가"
    },
    {
        image: "국기/투르크메니스탄.png",
        answer: "투르크메니스탄"
    },
    {
        image: "국기/튀니지.png",
        answer: "튀니지"
    },
    {
        image: "국기/동티모르.png",
        answer: "동티모르"
    },
    {
        image: "국기/타지키스탄.png",
        answer: "타지키스탄"
    },
    {
        image: "국기/태국.png",
        answer: "태국"
    },
    {
        image: "국기/토고.png",
        answer: "토고"
    },
    {
        image: "국기/토켈라우.png",
        answer: "토켈라우"
    },
    {
        image: "국기/프랑스령 남방 및 남극.png",
        answer: "프랑스령 남방 및 남극"
    },
    {
        image: "국기/차드.png",
        answer: "차드"
    },
    {
        image: "국기/터크스 케이커스 제도.png",
        answer: "터크스 케이커스 제도"
    },
    {
        image: "국기/시리아.png",
        answer: "시리아"
    },
    {
        image: "국기/신트마르턴.png",
        answer: "신트마르턴"
    },
    {
        image: "국기/에스와티니.png",
        answer: "에스와티니"
    },
    {
        image: "국기/엘살바도르.png",
        answer: "엘살바도르"
    },
    {
        image: "국기/남수단.png",
        answer: "남수단"
    },
    {
        image: "국기/상투메 프린시페.png",
        answer: "상투메 프린시페"
    },
    {
        image: "국기/소말리아.png",
        answer: "소말리아"
    },
    {
        image: "국기/수리남.png",
        answer: "수리남"
    },
    {
        image: "국기/산마리노.png",
        answer: "산마리노"
    },
    {
        image: "국기/세네갈.png",
        answer: "세네갈"
    },
    {
        image: "국기/시에라리온.png",
        answer: "시에라리온"
    },
    {
        image: "국기/슬로바키아.png",
        answer: "슬로바키아"
    },
    {
        image: "국기/세인트헬레나.png",
        answer: "세인트헬레나"
    },
    {
        image: "국기/슬로베니아.png",
        answer: "슬로베니아"
    },
    {
        image: "국기/스웨덴.png",
        answer: "스웨덴"
    },
    {
        image: "국기/싱가포르.png",
        answer: "싱가포르"
    },
    {
        image: "국기/수단.png",
        answer: "수단"
    },
    {
        image: "국기/사우디아라비아.png",
        answer: "사우디아라비아"
    },
    {
        image: "국기/세이셸.png",
        answer: "세이셸"
    },
    {
        image: "국기/솔로몬 제도.png",
        answer: "솔로몬 제도"
    },
    {
        image: "국기/러시아.png",
        answer: "러시아"
    },
    {
        image: "국기/르완다.png",
        answer: "르완다"
    },
    {
        image: "국기/세르비아.png",
        answer: "세르비아"
    },
    {
        image: "국기/레위니옹.png",
        answer: "레위니옹"
    },
    {
        image: "국기/루마니아.png",
        answer: "루마니아"
    },
    {
        image: "국기/카타르.png",
        answer: "카타르"
    },
    {
        image: "국기/파라과이.png",
        answer: "파라과이"
    },
    {
        image: "국기/팔라우.png",
        answer: "팔라우"
    },
    {
        image: "국기/포르투갈.png",
        answer: "포르투갈"
    },
    {
        image: "국기/팔레스타인.png",
        answer: "팔레스타인"
    },
    {
        image: "국기/푸에르토리코.png",
        answer: "푸에르토리코"
    },
    {
        image: "국기/핏케언 제도.png",
        answer: "핏케언 제도"
    },
    {
        image: "국기/생피에르 미클롱.png",
        answer: "생피에르 미클롱"
    },
    {
        image: "국기/파키스탄.png",
        answer: "파키스탄"
    },
    {
        image: "국기/파푸아뉴기니.png",
        answer: "파푸아뉴기니"
    },
    {
        image: "국기/폴란드.png",
        answer: "폴란드"
    },
    {
        image: "국기/필리핀.png",
        answer: "필리핀"
    },
    {
        image: "국기/오만.png",
        answer: "오만"
    },
    {
        image: "국기/파나마.png",
        answer: "파나마"
    },
    {
        image: "국기/페루.png",
        answer: "페루"
    },
    {
        image: "국기/프랑스령 폴리네시아.png",
        answer: "프랑스령 폴리네시아"
    },
    {
        image: "국기/뉴질랜드.png",
        answer: "뉴질랜드"
    },
    {
        image: "국기/나우루.png",
        answer: "나우루"
    },
    {
        image: "국기/니우에.png",
        answer: "니우에"
    },
    {
        image: "국기/네덜란드.png",
        answer: "네덜란드"
    },
    {
        image: "국기/네팔.png",
        answer: "네팔"
    },
    {
        image: "국기/노르웨이.png",
        answer: "노르웨이"
    },
    {
        image: "국기/나이지리아.png",
        answer: "나이지리아"
    },
    {
        image: "국기/노퍽섬.png",
        answer: "노퍽섬"
    },
    {
        image: "국기/누벨칼레도니.png",
        answer: "누벨칼레도니"
    },
    {
        image: "국기/니제르.png",
        answer: "니제르"
    },
    {
        image: "국기/니카라과.png",
        answer: "니카라과"
    },
    {
        image: "국기/나미비아.png",
        answer: "나미비아"
    },
    {
        image: "국기/모잠비크.png",
        answer: "모잠비크"
    },
    {
        image: "국기/말레이시아.png",
        answer: "말레이시아"
    },
    {
        image: "국기/멕시코.png",
        answer: "멕시코"
    },
    {
        image: "국기/말라위.png",
        answer: "말라위"
    },
    {
        image: "국기/모리셔스.png",
        answer: "모리셔스"
    },
    {
        image: "국기/몬트세랫.png",
        answer: "몬트세랫"
    },
    {
        image: "국기/몰디브.png",
        answer: "몰디브"
    },
    {
        image: "국기/몰타.png",
        answer: "몰타"
    },
    {
        image: "국기/마르티니크.png",
        answer: "마르티니크"
    },
    {
        image: "국기/모리타니.png",
        answer: "모리타니"
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
            <div class="flag-container">
                <img src="${question.image}" alt="국기 이미지" class="quiz-image" style="max-width: 300px; height: auto; margin: 20px auto; display: block;">
            </div>
            <div class="input-container" style="text-align: center; margin-top: 20px;">
                <input type="text" class="quiz-input" placeholder="국가 이름을 입력하세요" onkeypress="checkAnswer(event)" style="width: 80%; max-width: 300px; padding: 10px; font-size: 16px;">
            </div>
        </div>
    `;
    
    // 입력 필드에 포커스
    quizContent.querySelector('input').focus();
}

function checkAnswer(event) {
    if (event.key === 'Enter') {
        const userAnswer = document.querySelector('.quiz-input').value.trim().toLowerCase().replace(/\s+/g, '');
        const correctAnswer = currentQuiz[currentQuestionIndex].answer.toLowerCase().replace(/\s+/g, '');
        
        userAnswers.push({
            question: currentQuiz[currentQuestionIndex].image,
            userAnswer: document.querySelector('.quiz-input').value.trim(),
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
    
    // 정답 확인 버튼 추가
    const answerSheetButton = document.createElement('button');
    answerSheetButton.textContent = '정답 확인하기';
    answerSheetButton.className = 'answer-sheet-button';
    answerSheetButton.onclick = showAnswerSheet;
    quizResult.appendChild(answerSheetButton);
}

function showAnswerSheet() {
    const quizResult = document.getElementById('quizResult');
    
    // 기존 정답 확인 버튼 제거
    const oldButton = quizResult.querySelector('.answer-sheet-button');
    if (oldButton) {
        oldButton.remove();
    }
    
    // 정답 확인 컨테이너 생성
    const answerSheet = document.createElement('div');
    answerSheet.className = 'answer-sheet';
    
    let answerSheetHTML = '<h3>정답 확인</h3><div class="answer-list">';
    
    userAnswers.forEach((item, index) => {
        answerSheetHTML += `
            <div class="answer-item ${item.userAnswer === item.correctAnswer ? 'correct' : 'incorrect'}">
                <div class="question-number">문제 ${index + 1}</div>
                <div class="answer-info">
                    <div>국기: <img src="${item.question}" alt="국기 이미지" style="max-width: 100px; height: auto;"></div>
                    <div>입력한 답: ${item.userAnswer}</div>
                    <div>정답: ${item.correctAnswer}</div>
                </div>
            </div>
        `;
    });
    
    answerSheetHTML += '</div>';
    answerSheet.innerHTML = answerSheetHTML;
    
    // 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
        .answer-sheet {
            margin-top: 20px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .answer-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .answer-item {
            padding: 15px;
            border-radius: 8px;
            background-color: #f8f9fa;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
            color: #333;
        }
        .answer-info {
            font-size: 14px;
            color: #666;
        }
        .answer-info div {
            margin: 5px 0;
        }
        .answer-sheet-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 20px;
        }
        .answer-sheet-button:hover {
            background-color: #45a049;
        }
    `;
    document.head.appendChild(style);
    
    quizResult.appendChild(answerSheet);
}

function restartQuiz() {
    document.getElementById('quizResult').style.display = 'none';
    document.querySelector('.quiz-options').style.display = 'flex';
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizContent').innerHTML = '';
    userAnswers = [];
} 