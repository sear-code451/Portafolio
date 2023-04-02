
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
    // const test = req.body;
    // const user = new Page_User( test );

    // await user.save();
    // console.log(user);
    // console.log( test );

    // const { name, correo } = test;

    // datas_hbs = {
    //     title: name,
    //     nombre: correo
    // };

    res.render( 'html-links/home', datas_hbs );
    

};

// ABOUT Page
const aboutGet = async( req = request , res = response ) => {
    res.render( 'html-links/about', datas_hbs );
};

// CONTACT Page
const contactGet = async( req, res ) => {
    res.render( 'html-links/contact' );
};


const contactPost = async(req,res) => {
    
    // let transaction = req.body;
    // console.log(transaction);
    // transactionArr.push(transaction);
    // console.log(transactionArr);
    // res.send( transaction );
    const cuerpo = req.body;
    const result = new Page_User(cuerpo);

    await result.save();

    console.log(cuerpo);


};

module.exports = {
    homeGet,
    aboutGet,
    contactGet,
    contactPost
}