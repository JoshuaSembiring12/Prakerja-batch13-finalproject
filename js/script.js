// Contoh JavaScript untuk memperbesar penghargaan saat diklik
const awardItems = document.querySelectorAll('.award-item');

awardItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('enlarged');
    });
});
