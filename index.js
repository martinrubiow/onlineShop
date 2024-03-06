const http =require('http');

const app= require('./src/app');

//CONFIG .ENV
require('dotenv').config();

//CONFIG DB 
require('./src/config/db');

const server = http.createServer(app);

const PORT=process.env.PORT || 9990;

server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
});
