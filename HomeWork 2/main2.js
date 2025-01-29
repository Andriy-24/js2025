// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let users = [
    {name: 'vasya', age: 24, status: true},
    {name: 'petya', age: 23, status: false},
    {name: 'olya', age: 25, status: true},
    {name: 'sonya', age: 25, status: false},
    {name: 'alina', age: 23, status: true},
    {name: 'kolya', age: 27, status:false },
    {name: 'valera', age: 29, status: true},
    {name: 'seryoga', age: 26, status: false},
    {name: 'vitalik', age: 22, status: false},
    {name: 'oleg', age: 25, status: true}
]
console.log(users);
console.log(users[0].status);
console.log(users[1]['age']);
console.log(users[2].name);
console.log(users[3].status);
console.log(users[4]['name']);
console.log(users[5]['status']);
console.log(users[6].age);
console.log(users[7].name);
console.log(users[8]['age']);
console.log(users[9]['name']);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let harryPotter = {
    title: 'Harry Potter',
        pageCount: 1786,
        genre: 'fantasy'
}

let sherlockHolmes = {
    title: 'Sherlock Holmes',
    pageCount: 1956,
    genre: 'detective'
}

let shutterIsland = {
    title: 'Shutter Island',
    pageCount: 215,
    genre: 'psychological thriller'
}
console.log(harryPotter);
console.log(sherlockHolmes);
console.log(shutterIsland);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre, authors. Поле "автори" - являється масивом. Кожен автор має поля name та age.

let hpBook = {
    title: 'Harry Potter',
    pageCount: 1786,
    genre: 'fantasy',
    authors:[{
        name: 'Joanne Rowling',
        age: 56
    }
    ]
}

let shBook = {
    title: 'Sherlock Holmes',
    pageCount: 1956,
    genre: 'detective',
    authors:[{
        name: 'Sir Arthur Conan Doyle',
        age: 65
    }
    ]
}

let siBook = {
    title: 'Shutter Island',
    pageCount: 215,
    genre: 'psychological thriller',
    authors:[{
        name: 'Dennis Lehane',
        age: 57
    }
    ]
}
console.log(hpBook);
console.log(shBook);
console.log(siBook);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let usersArray = [
    {name: 'vasya',username: 'vaska', password: '14122ead'},
    {name: 'petya', username: 'petka', password: '1251rfasda'},
    {name: 'olya',username: 'olya232', password: 'sadaw141'},
    {name: 'sonya', username: 'sonya258', password: '12451gasd'},
    {name: 'alina',username: 'alinka', password: '1252da3ta'},
    {name: 'kolya',username: 'kolka232', password: '3521easda' },
    {name: 'valera',username: 'valerchik', password: '325wdawd242'},
    {name: 'sergiy', username: 'seryoga229', password: '1521wdasdwad'},
    {name: 'vitalik', username: 'vitalya242', password: '2515wadaw2'},
    {name: 'oleg',username: 'olega228', password: '14526wadawda'}
]
console.log(usersArray);
console.log('Password: ' + usersArray[0].password);
console.log('Password: ' + usersArray[1]['password']);
console.log('Password: ' + usersArray[2]['password']);
console.log('Password: ' + usersArray[3].password);
console.log('Password: ' + usersArray[4].password);
console.log('Password: ' + usersArray[5]['password']);
console.log('Password: ' + usersArray[6]['password']);
console.log('Password: ' + usersArray[7]['password']);
console.log('Password: ' + usersArray[8].password);
console.log('Password: ' + usersArray[9].password);

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;

if (x !== 0) {
    console.log('Вірно!')
}else {
    console.log('Невірно!')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 14;
if (time >=0 && time <= 14) {
    console.log('First')
}else if (time >=15 && time<=29) {
    console.log('Second')
}else if (time >=30 && time<=44) {
    console.log('Third')
}else if (time >=45 && time<=59) {
    console.log('Fourth')
}else {
    console.log('Введіть число від 0 до 59!')
}

// Те саме через світч

// let time = 2
switch (true) {
    case time >= 0 && time<= 14:
        console.log('First');
        break;
        case time >= 15 && time <= 29:
            console.log('Second');
        break;
            case time >= 30 && time <= 44:
                console.log('Third');
        break;
                case time >= 45 && time <= 59:
                    console.log('Fourth');
        break;
        default:
            console.log('Введіть число від 0 до 59!')
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let dayDecade = 24;
if (dayDecade >=1 && dayDecade <=9) {
    console.log('First Decade')
} else if (dayDecade >= 10 && dayDecade <=20) {
    console.log('Second Decade')
} else if (dayDecade >= 21 && dayDecade <=31) {
    console.log('Third Decade')
}else {
    console.log('Введіть число від 1 до 31!')
}

// Te саме через світч

// let dayDecade = 12;
switch (true) {
    case dayDecade >= 1 && dayDecade <=9: {
        console.log('First Decade');
        break;
    }
    case dayDecade >= 10 && dayDecade <= 20: {
        console.log('Second Decade');
        break;
    }
    case dayDecade >= 21 && dayDecade <= 31: {
        console.log('Third Decade');
        break;
    }
    default:
        console.log('Введіть число від 1 до 31!')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day = 7;
switch (day) {
    case 1: {
        console.log('Monday');
        break;
    }
    case 2: {
        console.log('Tuesday');
        break;
    }
    case 3: {
        console.log('Wednesday');
        break;
    }
    case 4: {
        console.log('Thursday');
        break;
    }
    case 5: {
        console.log('Friday');
        break;
    }
    case 6: {
        console.log('Saturday');
        break;
    }
    case 7: {
        console.log('Sunday');
        break;
    }
    default: {
        console.log('Введіть число від 1 до 7!');
    }
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 5;
let b = 2;

if (a > b) {
    console.log(a)
}else if (a < b) {
    console.log(b)
}else if (a === b) {
    console.log('Числа рівні')
}else {
    console.log('Введіть числа в змінні')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1 = false;
if(!x1){
    x1 = 'default';
    console.log(x1)
}else {
    console.log(x1)
}

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}else {
    console.log('((((')
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}else {
    console.log('((((')
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}else {
    console.log('((((')
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}else {
    console.log('((((')
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}else {
    console.log('((((')
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}else {
    console.log('((((')
}