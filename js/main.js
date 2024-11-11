const badge = document.querySelector('.menu-badge');
const badgeItem = document.querySelector('.menu-badge-item');

const menuContainer = document.querySelector('.menu-container');

let showItem = false;

badge.addEventListener('click', myBadge);

function myBadge () {
    if (!showItem) {
        badgeItem.classList.add('open');
        menuContainer.classList.add('open')
        showItem = true;
    } else {
        badgeItem.classList.remove('open');
        menuContainer.classList.remove('open');
        showItem = false;
    }
}