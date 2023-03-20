
// Example of how to use javascript
// const cabezera = document.querySelector( ".header" );
// const title1 = "Pablo Rueda";
// console.log( cabezera );

// animation nav-menu

// document.querySelector(".nav-menu").addEventListener("click",animateNavMenu);

// const navMenu = document.querySelector(".none");

// const animateNavMenu = () => {
//     navMenu.classList.toggle("nav-menu");
// };


// nav-menu button
document.querySelector(".bars__menu").addEventListener("click", animateBars);

// Neccesary for button
const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");

// Neccessary for button main
const button_nav_menu = document.querySelector("#nav_menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    // nav-menu activation
    button_nav_menu.classList.toggle("boton-nav-menu");
    button_nav_menu.classList.toggle("nav-menu");

}





