// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    const quizCards = document.querySelectorAll('.quiz-card');
    
    // 퀴즈 카드에 호버 효과 추가
    quizCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 검색 기능 구현
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        quizCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // 검색 버튼 클릭 이벤트
    searchButton.addEventListener('click', performSearch);

    // 엔터 키 입력 이벤트
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 검색어 입력 시 실시간 검색
    searchInput.addEventListener('input', performSearch);
}); 