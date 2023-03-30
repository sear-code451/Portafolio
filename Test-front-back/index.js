
// Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Process
const app = express();
const port = process.env.PORT;

app.use( 
    express.urlencoded( {
        extended: true
    } )
);

app.use( express.json( {
    type: "*/*"
} ) );

app.use( cors() );

let transactionArr = [];

app.get( '/transactions', (req, res) => {
    res.send( JSON.stringify( transactionArr ) );
} );


app.post( '/transactions', (req, res) => {
    let transaction = req.body;
    transactionArr.push(transaction);
    console.log(transactionArr);
    res.send( JSON.stringify("Save Post") );
} );

app.listen( port , () => {
    console.log(`Running the port ${port}`);
} );

