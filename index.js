const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});
const port = process.env.PORT || 1526;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

// const express = require('express');
// const app = express();

// app.use(express.json());

// http.get('/', (request, response) => {
//     response.send(`<h1>Hello World!!!</h1>
//     <br>
//     <p> Welcome to my awesome node js app </p>
//     `)
// });

// const technologies = ['node', 'node.js', 'lit-element', 'express', 'express.js'];

// http.get('/technologies', (req, res) =>{
// res.send(technologies);
// });


// app.listen(1526, () => {
//     console.log(`Application listening to port ${port}`);
// });

