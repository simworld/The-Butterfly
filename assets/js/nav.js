'use strict'
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menu = document.querySelector('.navigation');
    const menutoggle = document.querySelector('.menutoggle');
    menutoggle.classList.toggle('open');
    menu.classList.toggle('open');
}


function buttonLink(){
    document.getElementsByClassName("btn")[0].addEventListener("click", function(){
        window.scrollTo(0, document.querySelector(".parallax-form").offsetTop);
    });
}
