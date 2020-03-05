const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click',() => {
      nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 2}s`;
    });
}

navSlide();
