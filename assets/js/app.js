var navEl = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if (window.scrollY > 56){
        navEl.classList.add('nav-scrolled');
    }
    else {
        navEl.classList.remove('nav-scrolled');
    }
});