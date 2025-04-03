const notableWorks = document.querySelector('.notable-works');
const images = Array.from(notableWorks.children);

images.forEach(img => {
    const clone = img.cloneNode(true);
    notableWorks.appendChild(clone);
});

const totalImages = notableWorks.children.length;
notableWorks.style.width = `${totalImages * 320}px`;

let scrollSpeed = 1;
let position = 0;

function scrollCarousel() {
    position -= scrollSpeed; 

    if (position <= -notableWorks.scrollWidth / 2) {
        position = 0;
    }

    notableWorks.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(scrollCarousel);
}

scrollCarousel();

notableWorks.addEventListener('mouseover', () => scrollSpeed = 0);
notableWorks.addEventListener('mouseout', () => scrollSpeed = 1);