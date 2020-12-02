/*-------------------------------- 
            moble menu
--------------------------------*/
const menuBarbtn = document.querySelector('.header__wrapper-menubar');
const mobileMenu = document.querySelector('.mobile__menu');
const closeMenuBtn = document.querySelector('.mobile__menu-close');

// open mobile menu
menuBarbtn.addEventListener( 'click', ()=> {
  mobileMenu.classList.add('show');
} );

// close mobile menu
closeMenuBtn.addEventListener( 'click', ()=> {
  mobileMenu.classList.remove('show');
} );