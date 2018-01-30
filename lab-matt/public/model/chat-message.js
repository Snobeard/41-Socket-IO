class ChatMessage {
  constructor(input) {
    this.timestamp = new Date().toLocaleTimeString();
    this.message = input.message;
    this.username = input.username;
  }


  render(parentElement) {
    let container = document.createElement('section');
    let message = document.createElement('p');
    container.classList.add('message-wrapper');

    message.textContent = `${this.timestamp} | ${this.username}: ${this.message}`;

    container.appendChild(message);
    parentElement.appendChild(container);
  }
}