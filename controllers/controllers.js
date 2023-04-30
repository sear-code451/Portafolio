
// Requires
const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const Page_User = require('../models/schema-users');
const { datas_hbs, listCorrect } = require('../helpers/variables');
const { generarJWT } = require('../helpers/generar-jwt');


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
const contactGet = ( req, res ) => {
    res.render( 'html-links/contact', datas_hbs );
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
    };
    // Encript password
    const salt = bcrypt.genSaltSync();
    lista.password = bcrypt.hashSync( password , salt);

    // Generate JWT OR TOKEN
    const token = await generarJWT( name, telephone, message );
    console.log(token);

    // Generate new Document inside User Schema
    const result = new Page_User( lista );
    
    // Save into the DB
    await result.save();

    // ListCorrect : adding the token
    listCorrect.token = token;

    res.status(200).render( 'html-links/contact', listCorrect );

};

module.exports = {
    homeGet,
    aboutGet,
    contactGet,
    contactPost
}