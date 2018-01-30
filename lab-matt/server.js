'use strict';

require('dotenv').config();
let { PORT } = process.env;

let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static('./public'));

const USERS = {};

io.on('connection', (socket) => {
  console.log(`${socket.id} connected.`);
  USERS[socket.id].username = 'anon';
  
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected.`);
  });

  socket.on('', () => {

  });
});

http.listen(PORT, () => {
  console.log(`Server ready @ http://localhost:${PORT}`);
});