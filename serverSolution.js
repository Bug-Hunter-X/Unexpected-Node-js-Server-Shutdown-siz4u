const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;

//Handle uncaught exceptions to prevent unexpected shutdowns
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  server.close(() => {
    console.log('Server closed due to uncaught exception.');
    process.exit(1);
  });
});

//Graceful shutdown on SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('Shutting down...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});