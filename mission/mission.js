const themeSelector = document.querySelector("#theme-select");
function changeTheme() {
    const selectedTheme = themeSelector.value;
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        const logo = document.querySelector('.logo');
        logo.src = 'images/byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        const logo = document.querySelector('.logo');
        logo.src = 'images/byui-logo_blue.png';
    }
}
themeSelector.addEventListener('change', changeTheme);