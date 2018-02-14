// Mediator
class ChatRoom {
    showMessage(user, message) {
        let time = new Date();
        let sender = user.getName();

        console.log(time + "[" + sender + "]: " + message);
    }
}
class User {
    constructor(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }
    
    getName() {
        return this.name;
    }
    
    send(message) {
        this.chatMediator.showMessage(this, message);
    }
}
let mediator = new ChatRoom();

let priya = new User('Priya', mediator);
let darshita = new User('Darshita', mediator);

priya.send("Hello");
darshita.send("Hiiii");
