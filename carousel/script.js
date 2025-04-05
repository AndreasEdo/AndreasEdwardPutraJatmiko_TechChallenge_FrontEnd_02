
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const items = document.querySelectorAll('.items > div:not(.arrow)');
const markers = document.querySelectorAll('.marker > div');

let currentIndex = 0;

function updateCarousel(index) {

    items.forEach(item => item.classList.remove('active'));
    markers.forEach(marker => marker.classList.remove('active-marker'));


    items[index].classList.add('active');
    markers[index].classList.add('active-marker');
}


leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
});


rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
});
