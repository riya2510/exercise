//Observer Pattern
let JobPost = title => ({ title: title });

class JobSeeker { 
    constructor(name) {
        this._name = name;
    }

    notify(jobPost) {
        console.log(this._name, 'has been notified of a new posting :', jobPost.title);
    }
}
class JobBoard {
    constructor() {
        this.subscribers = [];
    }

    subscribe(jobSeeker) {
        this.subscribers.push(jobSeeker);
    }

    addJob(jobPost) {
        this.subscribers.forEach(subscriber => {
            subscriber.notify(jobPost);
        })
    }
}
const jonDoe = new JobSeeker('John Doe');
const janeDoe = new JobSeeker('Jane Doe');
const kaneDoe = new JobSeeker('Kane Doe');

const jobBoard = new JobBoard();
jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);

jobBoard.addJob(JobPost('Software Engineer'));