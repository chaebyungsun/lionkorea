document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.img-list li');

    const checkItems = () => {
        const triggerBottom = window.innerHeight * 0.9;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', checkItems);
    checkItems(); // 초기 로드 시 체크
});

