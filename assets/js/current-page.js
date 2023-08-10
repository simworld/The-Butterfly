'use strict'

const currentPageURL = window.location.href;
const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach((link) => {
if (link.href === currentPageURL) {
link.classList.add('current');
}
});
