
// Requires

// Export
const Server = require('./models/server');

// Process
const server = new Server();

server.listenPort();
