
// Requires
const { Router } = require('express');
const {
    homeGet,
    aboutGet,
    contactGet,
} = require('../controllers/controllers');

// Links
const router = Router();


// Rest Server / home-page
router.get( '/', homeGet );

// Rest Server /about-page
router.get('/about', aboutGet );

// Rest Server /contat-page
router.get( '/contact', contactGet );


// Module Export
module.exports = router;
