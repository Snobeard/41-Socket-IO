class ChatMessage {
  constructor(input) {
    this.timestamp = new Date().toLocaleTimeString();
    this.message = input.message;
    this.user = input.user;
    
  }


}