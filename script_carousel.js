let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

document.querySelector('.carousel .next').addEventListener('click', nextImage);
document.querySelector('.carousel .prev').addEventListener('click', prevImage);

setInterval(nextImage, 5000); // Автоматическая смена каждые 5 секунды
