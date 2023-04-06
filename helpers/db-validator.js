
// Requires
const Role = require('../models/roles');

// Process
const isValidRole = async( rol = '' ) => {
    const roleValueDB = await Role.findOne( { rol } );
    if( !roleValueDB ) {
        throw new Error( `This rol ${rol} does not exist in the DB` );
    }
};

module.exports = {
    isValidRole
}