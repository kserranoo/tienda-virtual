const navEmail = document.getElementsByClassName('navbar-email')[0];
const desktopMenu = document.getElementsByClassName('desktop-menu')[0];
const navMobileMenu = document.getElementsByClassName('menu')[0];
const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
const navShopping = document.getElementsByClassName('nav-shopping-cart')[1];
const shoppingCart = document.getElementsByClassName('shopping')[0];

navEmail.addEventListener('click', toggleDesktopMenu);
navMobileMenu.addEventListener('click', toggleMobileMenu);
navShopping.addEventListener('click', toggleShopping)

function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleShopping() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCart.classList.toggle('inactive')
}



