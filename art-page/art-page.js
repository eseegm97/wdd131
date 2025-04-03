const carouselContainer = document.querySelector('.carousel-container');
const notableWorks = document.querySelector('.notable-works');

const images = Array.from(notableWorks.children);
images.forEach(img => {
    const clone = img.cloneNode(true);
    notableWorks.appendChild(clone);
});