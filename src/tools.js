//----------data-------------
let persons = [
    {
        name: "Nicole",
        logo: 'images/userphoto/0.jpeg'
    },
    {
        name: "Alexa",
        logo: 'images/userphoto/1.jpeg'
    },
    {
        name: "Betty",
        logo: 'images/userphoto/2.jpeg'
    },
    {
        name: "Ciri",
        logo: 'images/userphoto/3.jpeg'
    },
    {
        name: "Debra",
        logo: 'images/userphoto/4.jpeg'
    },
    {
        name: "Ellis",
        logo: 'images/userphoto/5.jpeg'
    },
    {
        name: "Francis",
        logo: 'images/userphoto/6.jpeg'
    },
    {
        name: "Amber",
        logo: 'images/userphoto/7.jpeg'
    },
    {
        name: "Kimmy",
        logo: 'images/userphoto/8.jpeg'
    },
    {
        name: "Anna",
        logo: 'images/userphoto/9.jpeg'
    },
    {
        name: "Rachel",
        logo: 'images/userphoto/10.jpeg'
    },
    {
        name: "Robin",
        logo: 'images/userphoto/11.jpeg'
    },
    {
        name: "Lily",
        logo: 'images/userphoto/12.jpeg'
    },
    {
        name: "Michelle",
        logo: 'images/userphoto/13.jpeg'
    },
    {
        name: "Jenna",
        logo: 'images/userphoto/14.jpeg'
    },
];
let surprises = [['animals', 15], ['food', 26], ['halloween', 7], ['NY-17', 7]];
let messages = ['Привет! Как ты относишься к знакомствам в Интернете?',
    'Привет! Как ты относишься к пассионарной теории этногенеза?',
    'Привет! Какой у тебя любимый покемон?',
    'Привет! Что ты думаешь о причинах поражения белого движения в Гражданской войне?',
    'Привет! Можешь занять косарь на пару недель?',
    'Привет! За две минуты объясни принцип квантовой электродинамики. Начинай',
    'Привет! Оцени себя по десятибалльной шкале, насколько ты странная?',
    'Привет! Представь,ты стала размером с карандаш и попала в блендер. Как планируешь выбираться наружу?',
    'Привет! Что такое философия боевых искусств в твоём понимании?',
    'Привет! Расскажи, что творится в стране последние десять лет?',
    'Привет! Кем бы ты стала из супергероев?'
];


//-------activities-kinds
class Activity {
    constructor(person) {
        this.person = person;
    }
}

class Sticker extends Activity {
    constructor(person) {
        super(person);
        let {name, logo} = this.person;
        this.title = 'Обрадуйте стикером!';
        this.message = `Привлеките внимание пользователя ${name}`;
        this.logo = logo;
        this.image = `images/stickers/${randomNumberTo(8)}.png`;
        this.type = 'sticker';
        this.id = this.type+ new Date().getMilliseconds() + this.logo;
        this.isSend = false;


    }
}

class Surprise extends Activity {
    constructor(person) {
        super(person);
        let {name, logo} = this.person;
        this.title = 'Отправьте сюрприз!';
        this.message = `${name} будет рада`;
        this.logo = logo;
        let [kind, imageNum] = [...surprises[randomNumberTo(surprises.length - 1)]];
        this.image = `images/surprises/${kind}/${randomNumberTo(imageNum)}.png`;
        this.type = 'surprise';
        this.id = this.type+ new Date().getMilliseconds() + this.logo;
        this.isSend = false;

    }
}

class Greeting extends Activity {
    constructor(person) {
        super(person);
        let {name, logo} = this.person;
        this.title = `${name} ждет приветствий!`;
        this.message = messages[randomNumberTo(messages.length - 1)];
        this.logo = logo;
        this.type = 'greeting';
        this.image = '';
        this.id = this.type+ new Date().getMilliseconds() + this.logo;
        this.isSend = false;

    }
}

function randomNumberTo(limit) {
    return Math.round(Math.random() * limit)
}

//--------activity-manipulation
export function activityCreator() {
    let num = randomNumberTo(2);
    let person = persons[randomNumberTo(persons.length - 1)];
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