toggleMenu = () => {
    let navbar = document.querySelector('.ul-header');
    let background = document.querySelector('.main-header');
    let hidden = document.querySelector('h1');
    let burger = document.querySelector('.burger');
    burger.addEventListener('click', () =>{
        navbar.classList.toggle('show-nav');
        background.classList.toggle('background');
        hidden.classList.toggle('hidden')
    });
};

toggleMenu();