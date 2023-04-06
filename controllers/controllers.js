
// Requires
const { response, request } = require('express');
const Page_User = require('../models/schema-users');


let datas_hbs = {
    title: 'Portafolio',
    nombre: 'Pablo Rueda'
};

// Process

// HOME Page
const homeGet = async( req = request , res = response ) => {
    res.render( 'html-links/home', datas_hbs );
};

// ABOUT Page
const aboutGet = async( req = request , res = response ) => {
    res.render( 'html-links/about', datas_hbs );
};

// CONTACT Page
const contactGet = async( req, res ) => {
    res.render( 'html-links/contact', {
        correct: 'todo correcto'
    } );
};

const contactPost = async(req = request,res = response) => {
    
    console.log( req.body );

    const { 
        name,
        email,
        password,
        telephone,
        rol,
        message
    } = req.body;
    
    const lista = {
        name,
        email,
        password,
        telephone,
        rol,
        message
    }

    const result = new Page_User( lista );

    await result.save();

    res.status(200);
};

module.exports = {
    homeGet,
    aboutGet,
    contactGet,
    contactPost
}