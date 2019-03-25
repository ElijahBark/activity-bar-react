import {COUNT_OF_STICKERS, COUNT_OF_ACTIVITIES, messages, persons, surprises} from './config';

//-------activities-kinds
class Activity {
    constructor(person) {
        this.person = person;
        const {name, logo} = this.person;
        this.logo = logo;
        this.name = name;
        this.isSend = false;
    }
}

class Sticker extends Activity {
    constructor(person) {
        super(person);
        this.title = 'Обрадуйте стикером!';
        this.message = `Привлеките внимание пользователя ${this.name}`;
        this.image = `images/stickers/${randomNumberTo(COUNT_OF_STICKERS - 1)}.png`;
        this.type = 'sticker';
        this.id = this.type+ new Date().getMilliseconds() + this.logo;
    }
}

class Surprise extends Activity {
    constructor(person) {
        super(person);
        this.title = 'Отправьте сюрприз!';
        this.message = `${this.name} будет рада`;
        const [kind, imageNum] = [...surprises[randomNumberTo(surprises.length - 1)]];
        this.image = `images/surprises/${kind}/${randomNumberTo(imageNum)}.png`;
        this.type = 'surprise';
        this.id = this.type+ new Date().getMilliseconds() + this.logo;

    }
}

class Greeting extends Activity {
    constructor(person) {
        super(person);
        this.title = `${this.name} ждет приветствий!`;
        this.message = messages[randomNumberTo(messages.length - 1)];
        this.type = 'greeting';
        this.id = this.type+ new Date().getMilliseconds() + this.logo;
    }
}

function randomNumberTo(limit) {
    return Math.round(Math.random() * limit)
}

//--------activity-manipulation
export function activityCreator() {
    const num = randomNumberTo(COUNT_OF_ACTIVITIES - 1);
    const person = persons[randomNumberTo(persons.length - 1)];
    let activity;
    switch (num) {
        case 0:
            activity = new Sticker(person);
            break;
        case 1:
            activity = new Surprise(person);
            break;
        case 2:
            activity = new Greeting(person);
            break;
    }

    return activity;
}

export function makeTimeInterval(from, to) {
 return Math.ceil(Math.random() * from + to)
}