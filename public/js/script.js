
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
const main_body = document.querySelector(".main-body");
const body = document.getElementById("body");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    // nav-menu activation
    button_nav_menu.classList.toggle("boton-nav-menu");
    button_nav_menu.classList.toggle("nav-menu");
    main_body.classList.toggle("active");
    body.classList.toggle("activar");
}

// function 02 Knowledge : toggleButton()

//  button set
const btnJavascript = document.getElementById( "javascript-content" );
const btnExpress = document.getElementById("express-content");
const btnNode = document.getElementById("node-content");
const btnTypescript = document.getElementById("typescript-content");
const btnMongoose = document.getElementById("mongoose-content");
const btnMongoDB = document.getElementById("mongo-content");


const btnList = [
    btnJavascript,
    btnExpress,
    btnNode,
    btnTypescript,
    btnMongoose,
    btnMongoDB 
];

const listFilter = ( value, listArray ) => {
    listArray.forEach( ( current ) => {
        if( current === value ) return
        if( current.tabIndex === 1) current.tabIndex = 0;
        current.classList.toggle("visible");
    } );
};



const toggleButtonJs = () => {
    if( btnJavascript.tabIndex === 1 ) return console.log("javascript");
    if( btnJavascript.tabIndex === 0 ) {
        // visible
        btnJavascript.tabIndex = 1;
        value = btnJavascript;
        // Rest
        listFilter( value, btnList );
    }
};
const toggleButtonExpress = () => {
    if( btnExpress.tabIndex === 1 ) return console.log("Express");
    if( btnExpress.tabIndex === 0 ) {
        // visible
        btnExpress.tabIndex = 1;
        const value = btnExpress;
        // Rest
        listFilter( value, btnList );
    }
};
const toggleButtonNode = () => {
    if( btnNode.tabIndex === 1 ) return console.log("Node");
    if( btnNode.tabIndex === 0 ) {
        // visible
        btnNode.tabIndex = 1;
        const value = btnNode;
        // Rest
        listFilter( value, btnList );
    }
};
const toggleButtonTs = () => {
    if( btnTypescript.tabIndex === 1 ) return console.log("Typescript");
    if( btnTypescript.tabIndex === 0 ) {
        // visible
        btnTypescript.tabIndex = 1;
        const value = btnTypescript;
        // Rest
        listFilter( value, btnList );
    }
};
const toggleButtonMongoose = () => {
    if( btnMongoose.tabIndex === 1 ) return console.log("Mongoose");
    if( btnMongoose.tabIndex === 0 ) {
        // visible
        btnMongoose.tabIndex = 1;
        const value = btnMongoose;
        // Rest
        listFilter( value, btnList );
    }
};
const toggleButtonMongo = () => {
    if( btnMongoDB.tabIndex === 1 ) return console.log("Mongo DB");
    if( btnMongoDB.tabIndex === 0 ) {
        // visible
        btnMongoDB.tabIndex = 1;
        const value = btnMongoDB;
        // Rest
        listFilter( value, btnList );
    }
};





