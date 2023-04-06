
// Requires
const { Schema, model } = require('mongoose');

// Process
const schemaUser =  Schema( {
    name: {
        type: String,
        required: [ true, 'The name is required' ]
    },

    email: {
        type: String,
        required: [ true, 'The email is required' ],
        unique: true
    },

    password: {
        type: String,
        required: [ true, 'The password is required' ]
    },

    rol: {
        type: String,
        required: [ true, 'The Rol is required' ]
    },

    telephone: {
        type: Number,
        required: [ true, 'The telephone is required' ]
    },

    message: {
        type: String || Number,
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