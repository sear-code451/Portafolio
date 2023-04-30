
// Requires
const Role = require('../models/roles');
const Page_User = require('../models/schema-users');

// Process
const isValidRole = async( rol = '' ) => {
    const roleValueDB = await Role.findOne( { rol } );
    if( !roleValueDB ) {
        throw new Error( `This rol ${rol} does not exist in the DB` );
    }
};

const isValidEmail = async( email ) => {
    const emailValid = await Page_User.findOne( { email } );
    if( !emailValid ) throw new Error ( `This ${email} does not exist in the DB` );
};

module.exports = {
    isValidRole,
    isValidEmail
}