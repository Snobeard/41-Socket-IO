console.log('Proof of Life!');

const socket = io();

let messageForm = document.getElementById('message-form');
let message = document.getElementById('message');
let messageDump = document.getElementById('dump');

// ================ EVENT LISTENERS ================
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('message:', event.target[0].value);
  let message = event.target[0].value;

  socket.emit('send-message', { message });
});

// ================ SOCKETS ================
socket.on('render-message', (data) => {
  let message = new ChatMessage(data);
  message.render(messageDump);
});
