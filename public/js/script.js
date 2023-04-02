

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


const class_hidden_content = document.querySelectorAll(".item-knowledge");
console.log(class_hidden_content[0]);

const btnList = [
    btnJavascript,
    btnExpress,
    btnNode,
    btnTypescript,
    btnMongoose,
    btnMongoDB 
];


const toggle_btn_current = ( btn_current, list_button_knowledge ) => {
    list_button_knowledge.forEach( ( current ) => {
        if( current === btn_current ) {
            btn_current.tabIndex = 1;
            return
        } else {
            current.tabIndex = 0;
        }
    } );
};

const toggle_content_current = () => {
    
    btnList.forEach( (current, index) => {
        if( current.tabIndex === 1 ) {
            class_hidden_content[index].classList.toggle("not-visible");
            current.classList.toggle("activar");
            return
        } else {
            if( !class_hidden_content[index].classList.contains("not-visible") ){
                class_hidden_content[index].classList.toggle("not-visible");
            }
            if( current.classList.contains("activar") ) {
                current.classList.toggle("activar");
            }
        }
    } )
};

const toggleButtonJs = () => {
    if( btnJavascript.tabIndex === 1 ) return;
    if( btnJavascript.tabIndex === 0 ) {
        const btn_current = btnJavascript;
        toggle_btn_current( btn_current, btnList );
        toggle_content_current();
    }
};

const toggleButtonExpress = () => {
    if( btnExpress.tabIndex === 1 ) return;
    if( btnExpress.tabIndex === 0 ) {
        const btn_current = btnExpress;
        toggle_btn_current( btn_current, btnList );
        toggle_content_current();
    }
};
const toggleButtonNode = () => {
    if( btnNode.tabIndex === 1 ) return;
    if( btnNode.tabIndex === 0 ) {
        const btn_current = btnNode;
        toggle_btn_current( btn_current, btnList );
        toggle_content_current();
    }
};
const toggleButtonTs = () => {
    if( btnTypescript.tabIndex === 1 ) return;
    if( btnTypescript.tabIndex === 0 ) {
        const btn_current = btnTypescript;
        toggle_btn_current( btn_current, btnList );
        toggle_content_current();
    }
};
const toggleButtonMongoose = () => {
    if( btnMongoose.tabIndex === 1 ) return;
    if( btnMongoose.tabIndex === 0 ) {
        const btn_current = btnMongoose;
        toggle_btn_current( btn_current, btnList );
        toggle_content_current();
    }
};
const toggleButtonMongo = () => {
    if( btnMongoDB.tabIndex === 1 ) return;
    if( btnMongoDB.tabIndex === 0 ) {
        const btn_current = btnMongoDB;
        toggle_btn_current( btn_current, btnList );
        toggle_content_current();
    }
};




