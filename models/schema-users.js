
// Requires
const { Schema, model } = require('mongoose');

// Process
const schemaUser =  Schema( {
    name: {
        type: String,
        // required: [ true, 'It is need name' ]
    },

    correo: {
        type: String,
        // required: [ true, 'It is need email' ],
        // unique: true
    },

    password: {
        type: String,
        // required: [ true, 'It is need password' ]
    },

    rol: {
        type: String,
        // required: [ true, 'It is need rol' ],
        // enum: [ 'ADMIN_ROLE', 'USER_ROLE' ]
    },

    status: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }

} );

module.exports = model( 'Page_User', schemaUser );