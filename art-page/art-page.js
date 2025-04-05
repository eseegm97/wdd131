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

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('close-btn');
const triggers = document.querySelectorAll('.lightbox-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    
    const imageUrl = trigger.getAttribute('href');
    const captionText = trigger.querySelector('img').alt;
    
    lightboxImg.src = imageUrl;
    lightboxCaption.textContent = captionText;

    lightbox.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('show');
  }
});