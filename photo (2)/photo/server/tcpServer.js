
const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.on('error', (err) => {
  console.error(`Server error: ${err.message}`);
});

server.listen(3002, '127.0.0.1', () => {
  console.log('TCP Server is listening on port 3002');
});
