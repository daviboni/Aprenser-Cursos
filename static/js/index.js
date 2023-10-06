function StatusMenuNav(hamburger) {
    const menuNav = document.getElementById('header-menu');
    const menuOptions = document.getElementById('nav-menu');

    let newStatus = menuNav.getAttribute('status') === 'hidden' ? 'visible' : 'hidden';
    menuNav.setAttribute('status', newStatus);

    if (newStatus === 'hidden') {
        menuOptions.classList.add('menu-options-hidden');
    } else {
        menuOptions.classList.remove('menu-options-hidden');
    }
}