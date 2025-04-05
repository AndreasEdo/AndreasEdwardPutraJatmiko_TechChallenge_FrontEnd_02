//deklarasi variable yang bakal dipakai
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const items = document.querySelectorAll('.items > div:not(.arrow)');
const markers = document.querySelectorAll('.marker > div');

//biar tau index ke berapa sekarang
let currentIndex = 0;


function updateCarousel(index) {
    //tiap pindah class active dihapus
    items.forEach(item => item.classList.remove('active'));
    markers.forEach(marker => marker.classList.remove('active-marker'));

    //menambah class active tergantung indexnya
    items[index].classList.add('active');
    markers[index].classList.add('active-marker');
}


leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;//mencari index yang aktif, modulo biar kembali lagi kalau lebih dari jumlah item
    updateCarousel(currentIndex);
});


rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;//sama kayak yang atas cuma dia kekanan jadi di tambah
    updateCarousel(currentIndex);
});
