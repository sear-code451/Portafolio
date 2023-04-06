// Requires
const { validationResult } = require('express-validator');

// Process
const validarCampos = ( req, res, next ) => {
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400);
    }
    next();
};

module.exports = {
    validarCampos
}