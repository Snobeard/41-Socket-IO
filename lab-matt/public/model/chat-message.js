class ChatMessage {
  constructor(input) {
    this.timestamp = new Date().toLocaleTimeString();
    this.message = input.message;
    this.username = input.username;
  }


  render(parentElement) {
    let container = document.createElement('section');
    let timestamp = document.createElement('p');
    let username = document.createElement('p');
    let message = document.createElement('p');
    container.classList.add('message-wrapper');
    timestamp.classList.add('timestamp');
    username.classList.add('username');
    message.classList.add('message');

    timestamp.textContent = `${this.timestamp}`;
    username.textContent = ` | ${this.username}: `;
    message.textContent = `${this.message}`;

    container.appendChild(timestamp);
    container.appendChild(username);
    container.appendChild(message);
    parentElement.appendChild(container);
  }
}