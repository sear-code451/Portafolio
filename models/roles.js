
// Requires
const { Schema, model } = require('mongoose');

// Process Schema
const RoleSchema = Schema( {
    rol: {
        type: String,
        required: [ true, 'The role is mandatory' ]
    }
} )

module.exports = model( 'Role', RoleSchema );