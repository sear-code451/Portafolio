
// Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const { dbConnection } = require('../database/config');

// Process
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path_DB = process.env.MONGO_CONN ;
        this.path_partials = process.env.PATH_PARTIALS;
        this.path_home = '/';
        
        this.app.set( 'view engine', 'hbs' );
        hbs.registerPartials( this.path_partials);
        
        // Connection with to the DB
        this.connectionDB();
        // Connection with to the Middlewares
        this.middlewares();
        // Connection with to the Routes
        this.routes();
    }

    middlewares() {
        // Cors
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );
        
        // Public local directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.path_home, require('../router/home') );
    }

    async connectionDB() {
        await dbConnection();
    }

    listenPort() {
        this.app.listen( this.port, () => {
        console.log( `Is running in port ${this.port}` );    
        } );
    }

}

module.exports = Server;