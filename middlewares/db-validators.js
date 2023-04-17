
// Requires
const Page_User = require('../models/schema-users');


// Verify email into DB
const emailExists = async( email ) => {
    const verifyEmail = await Page_User.findOne( {email} );
    if( verifyEmail ) throw new Error( `The ${email} is already registered.` );
};

module.exports = {
    emailExists
}