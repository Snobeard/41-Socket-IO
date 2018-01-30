console.log('Proof of Life!');

const socket = io();

let messageForm = document.getElementById('message-form');
let usernameForm = document.getElementById('username-form');
let usernameField = document.getElementById('username-field');
let messageDump = document.getElementById('dump');

// ================ EVENT LISTENERS ================
usernameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Setting Username:', `'${event.target[0].value}'`);
  let username = event.target[0].value;

  socket.emit('set-username', { username });
  event.target[0].value = '';
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Sending message:', `'${event.target[0].value}'`);
  let message = event.target[0].value;

  socket.emit('send-message', { message });
  event.target[0].value = '';
});

// ================ SOCKETS ================
socket.on('render-message', (data) => {
  let message = new ChatMessage(data);
  message.render(messageDump);
});

socket.on('set-username-placeholder', ({ username }) => {
  usernameField.placeholder = username;
});