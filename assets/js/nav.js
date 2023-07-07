window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function togglemenu() {
    const menu = document.querySelector('.navigation');
    const menutoggle = document.querySelector('.menutoggle');
    menutoggle.classList.toggle('open');
    menu.classList.toggle('open');
}
