const http = require('http'); // loads http package from Node

const server = http.createServer((request, response) => {
    // console.log(`Someone has requested ${request.url}`);
   
    if (request.url === '/') {
      response.write('Home page');
      response.end();
    }
    else if (request.url === '/about') {
        response.write('About page');
        response.end();
      }
      else if (request.url === '/contact') {
        response.write('Contact page');
        response.end();
      }
      else if (request.url === '/test') {
        response.write('Test page');
        response.end();
      }
    else {
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  }); // creating the server

server.listen(3000, () => console.log('Server is running on port 3000')); // listening for incoming requests from the gateway 3000