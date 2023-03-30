
// Requires
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

// hbs.registerPartial( __dirname + '/views/partials' );

// Process
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path_partials = process.env.PATH_PARTIALS;
        this.path_home = '/';
        
        this.app.set( 'view engine', 'hbs' );
        hbs.registerPartials( this.path_partials);
        
        
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Public local directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.path_home, require('../router/home') );
    }

    listenPort() {
        this.app.listen( this.port, () => {
        console.log( `Is running in port ${this.port}` );    
        } );
    }

}

module.exports = Server;