// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.ul-menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');

// Set inital state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        console.log("opening menu");

        //Set Menu State
        showMenu = true;
    } else {
        //does the opposite
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // Used for testing only
        console.log("closing menu");
    }

    // function toggleMenu() {
    //     menuBtn.classList.toggle('close');
    //     menu.classList.toggle('show');
    //     menuNav.classList.toggle('show');
    //     menuBranding.classList.toggle('show');
    //     navItems.forEach(item => item.classList.toggle('show'));
    //     showMenu = !showMenu;
    // }

    // Wrap every letter in a span
}