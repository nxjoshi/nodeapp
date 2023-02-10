//Framework hapi.js
const Hapi = require('hapi');

// logic port and machine
const host = 'localhost';
const port = 8000; 

// Create Server
const server = Hapi.Server({
    host: host,
    port: port
});

// Initiate Server
const init = async () => {

    await server.start();
    console.log("Server up no porto: " + port);

}
require('./routes/routes')(server);
init();