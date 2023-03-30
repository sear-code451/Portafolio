
// Requires
const { response, request } = require('express');

const datas_hbs = {
    title: 'Portafolio',
    nombre: 'Pablo Rueda'
}

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
    res.render( 'html-links/contact' )
};

module.exports = {
    homeGet,
    aboutGet,
    contactGet
}