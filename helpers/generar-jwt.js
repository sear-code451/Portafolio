
// Requires
const jwt = require('jsonwebtoken');

// Process
const generarJWT = async( name, telephone, message ) => {
    
    return new Promise( (resolve, reject) => {
        const payload = { name, telephone, message };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: 60 * 10
        } , (err, token) => {
            if( err ) {
                console.log(err);
                reject( 'Could not generate key' );
            } else {
                resolve( token );
            }
        } );
    } )
};

module.exports = {
    generarJWT
}


