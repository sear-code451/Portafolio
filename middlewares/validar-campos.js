// Requires
const { validationResult } = require('express-validator');
const { request, response } = require('express');
const { bugList, findingErrorMessages } = require('../helpers/variables');

// Process
const validarCampos = async( req = request, res = response, next ) => {
    let errors = validationResult(req);
    if( !errors.isEmpty() ) {
        bugList.data_error = findingErrorMessages( errors.errors );
        
        return res.status(400).render('html-links/contact', bugList );
    }
    next();
};

const validarCamposLogin = async( req = request, res = response, next ) => {
    
};

module.exports = {
    validarCampos
};