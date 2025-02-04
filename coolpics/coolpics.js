document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navigation = document.querySelector('.navigation');
    
    function toggleMenu() {
        navigation.classList.toggle('show');
    }

    menuButton.addEventListener('click', toggleMenu);

    function handleResize() {
        if (window.innerWidth > 1000) {
            navigation.classList.add('show');
            menuButton.style.display = 'none';
        } else {
            navigation.classList.add('hide');
            menuButton.style.display = 'block';
        }
    }

    window.addEventListener('resize', handleResize);

    handleResize();
});

function viewerTemplate(imageSrc, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imageSrc}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedImg = event.target;
    
    if (clickedImg.tagName !== 'IMG') return;

    const imgSrcParts = clickedImg.src.split("-");
    const fullImgSrc = imgSrcParts[0] + "-full.jpeg";

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImgSrc, clickedImg.alt));

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);