const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//The issue is that the server will not close gracefully if you press Ctrl+C to stop it

//The issue is that the server will not close gracefully if you press Ctrl+C to stop it