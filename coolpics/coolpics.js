document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navigation = document.querySelector('.navigation');
    
    function toggleMenu() {
        navigation.classList.toggle('show');
    }

    menuButton.addEventListener('click', toggleMenu);

    function handleResize() {
        if (window.innerWidth > 1000) {
            navigation.classList.remove('hide');
            menuButton.style.display = 'none';
        } else {
            navigation.classList.add('hide');
            menuButton.style.display = 'block';
        }
    }

    window.addEventListener('resize', handleResize);

    handleResize();
});