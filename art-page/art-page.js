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

document.querySelectorAll('.notable-works img').forEach(img => {
    const caption = document.createElement('div');
    caption.classList.add('image-caption');
    caption.textContent = img.alt;
    img.parentElement.appendChild(caption);

    img.addEventListener('mouseover', () => {
        scrollSpeed = 0;
        caption.style.opacity = '1';
    });

    img.addEventListener('mouseout', () => {
        scrollSpeed = 1;
        caption.style.opacity = '0';
    });
});

const caption = document.createElement("div");
caption.classList.add("image-caption");
document.body.appendChild(caption); 

document.querySelectorAll(".notable-works img").forEach(img => {
    img.addEventListener("mouseenter", (event) => {
        caption.textContent = img.alt; 
        caption.style.opacity = "1"; 
    });

    img.addEventListener("mouseleave", () => {
        caption.style.opacity = "0"; 
    });
});

const imagesInGallery = document.querySelectorAll('.main-gallery img');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalYear = document.getElementById('modal-year');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');

imagesInGallery.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = img.src;
        modalTitle.textContent = img.getAttribute('data-title');
        modalYear.textContent = img.getAttribute('data-year');
        modalDescription.textContent = img.getAttribute('data-description');
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});