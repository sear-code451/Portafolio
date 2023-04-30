
// Requires
const { Router } = require('express');
const { check } = require('express-validator');

// Folder: Helpers
const {
    isValidEmail
} = require('../helpers/db-validator');

// Folder: Controllers
const {
    dataGet,
    dataPost
} = require('../controllers/login-controllers');


// Process
const router = Router();

// Router

// Rest Server: Get
router.get( '/', dataGet );

// Rest Server: Post
router.post( '/',[
    // email
    check('email').not().isEmpty(),
    check('email').isEmail(),
    check('email').custom(isValidEmail)
] ,dataPost );



module.exports = router