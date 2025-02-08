const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Uncommon Error:  Unexpected Server Shutdown
//This error may occur if the server encounters an unhandled exception or if it is improperly shut down using the process.exit() method rather than server.close().  Also, resource leaks can lead to it.