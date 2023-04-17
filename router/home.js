
// Requires
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isValidRole } = require('../helpers/db-validator');
const { emailExists } = require('../middlewares/db-validators');
const {
    homeGet,
    aboutGet,
    contactGet,
    contactPost
} = require('../controllers/controllers');

// Links
const router = Router();


// Rest Server / home-page
router.get( '/', homeGet );

// Rest Server /about-page
router.get('/about', aboutGet );

// Rest Server /contat-page
router.get( '/contact', contactGet );
router.post( '/contact/', [
    // name
    check( 'name', 'There has to be a name.' ).not().isEmpty(),
    check( 'name', 'The name can have a minimum of 3 characters.' ).isLength( { min: 3 } ),
    // email
    check('email').custom(emailExists),
    check( 'email', 'There has to be a email.' ).not().isEmpty() ,
    check( 'email', 'It has to have the characteristics of an email.' ).isEmail(),
    // password
    check( 'password', 'There has to be a password.' ).not().isEmpty(),
    check( 'password', 'The password can have a minimum of 4 characters.' ).isLength( { min: 5 } ),
    // telephone 
    check( 'telephone', 'There has to be a telephone.' ).not().isEmpty(),
    check( 'telephone', 'Phone data has to be numbers.' ).isMobilePhone('es-ES'),
    // rol = asunto en el front
    check( 'rol', 'There has to be a asunto.' ).not().isEmpty(),
    check('rol').custom( isValidRole ),
    check('message', 'The message can have a max of 500 characters.' ).isLength( { max: 500 } ),
    // validación de los campos y el array de los errores
    validarCampos

] ,contactPost);



// Module Export
module.exports = router;
