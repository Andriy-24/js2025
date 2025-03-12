// - Знайти та вивести довжину наступних стрінгових значень
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні Стронгові значення
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   '.trim()
console.log(dirtyStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

    let str = 'Ревуть воли як ясла повні';
const stringToArray = (array) => array.split(' ');
console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об'єкти в масиві на стрінгові.

console.log([10, 8, -7, 55, 987, -1011, 0, 1050, 0].map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (array, direction) => {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        array.sort((a, b) => b - a);
    }
    return array;
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortByMonth = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortByMonth);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterByMonth = coursesAndDurationArray.filter(value => value.monthDuration >= 5);
console.log(filterByMonth);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapCoursesAndDur = coursesAndDurationArray.map((value, index) => {
    return {
        id: index+1,
        ...value
    }
});
console.log(mapCoursesAndDur);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: ['spade', 'diamond','heart', 'clubs']
//         value: ['6'-'10', 'ace','jack','queen','king']
//     colors = ['red','black']
// }

const suits = ["spade", "diamond", "heart", "clubs"];
const values = ["6", "7", "8", "9", "10", "ace", "jack", "queen", "king"];
const colors = { "spade": "black", "clubs": "black", "diamond": "red", "heart": "red" };

const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({ value, suit, color: colors[suit] });
    }
}
console.log(deck);

// - знайти піковий туз

deck.find(value => {
    if (value.suit === 'spade' && value.value === 'ace') {
        console.log(value);
    }
})

// - всі шістки

// deck.find(value => {
//     if (value.value === '6'){
//         console.log(value);
//     }
// })

console.log(deck.filter(value => value.value === '6'));

// - всі червоні карти

console.log(deck.filter(value => value.color === 'red'));

// - всі буби

console.log(deck.filter(value => value.suit === 'diamond'));

// - всі трефи від 9 та більше

console.log(deck.filter(value => value.suit === 'clubs' && ['9','10','ace','jack','queen','king'].includes(value.value)));

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduceCards = deck.reduce((previousValue, currentValue) => {
            if (currentValue.suit === 'spade') {
                previousValue.spades.push(currentValue);
            }if (currentValue.suit === 'diamond') {
                previousValue.diamonds.push(currentValue);
            }if (currentValue.suit === 'heart') {
                previousValue.hearts.push(currentValue);
            }if (currentValue.suit === 'clubs') {
                previousValue.clubs.push(currentValue);
            }
    return previousValue;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(reduceCards);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

let findSass = coursesArray.filter(value => value.modules.includes('sass'));
console.log(findSass)

// --написати пошук всіх об'єктів, в який в modules є docker

let findDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(findDocker)