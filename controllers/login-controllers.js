
// Requires
const { response, request } = require('express');
const Page_User = require('../models/schema-users');

// Process
const dataGet = ( req = request, res = response ) => {
    res.status(200).render( 'html-links/login' );
};

const dataPost = async(req = request, res = response ) => {
    console.log(req.body);
    // Query with the DB

    res.status(200).json({
        msg: "So token is the correct"
    });


    
};

module.exports = {
    dataGet,
    dataPost
}