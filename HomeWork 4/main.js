// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б

 function areaOfARectangle(a,b) {
    return a * b;
 }
console.log(areaOfARectangle(3, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

 function areaOfACircle(radius) {
     return Math.PI * (radius * radius);
 }
console.log(areaOfACircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

function areaOfTheCylinder(radius, height) {
    return 2 * Math.PI * radius * (radius + height);
}
console.log(areaOfTheCylinder(3, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let numsArray = [11,222,524,131,452]

function itemOfArray (array) {
    for (const item of array) {
        document.write(`<h4>${item}</h4>`);
    }
}
itemOfArray(numsArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}
createParagraph('lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUlWithLi (text) {
    document.write(`<ul>
       <li>${text}</li>
       <li>${text}</li>
       <li>${text}</li>
</ul>`)
}
createUlWithLi('qwerty')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlWithAmountOfLi (text, amountOfLi) {
    document.write(`<ul>`)
    for (let i = 0; i < amountOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createUlWithAmountOfLi('qwertywqdqdas', 4);

// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

let primitiveArray = [11,'wdadwa',false, 142,3e2,'grefs', true, true, 'opkmpoi']

function createListOfArray (array) {
    document.write(`<ol>`)
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (typeof(item) === 'string') {
            document.write(`<li>${item}</li>`)
        }else if(typeof(item) === 'number') {
            document.write(`<li>${item}</li>`)
        }else if (typeof(item) === 'boolean') {
            document.write(`<li>${item}</li>`)
        }
    }
    document.write(`</ol>`)
}
createListOfArray(primitiveArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

function fUserBlock (array) {
    document.write(`<div>`)
    for (const item of array) {
        document.write(`<div>Id: ${item.id} - Name: ${item.name} - Age: ${item.age}</div>`)
    }
    document.write(`</div>`)
}

let users = [
    {id: 0, name: 'John', age: 30},
    {id: 1, name: 'Olya', age: 26},
    {id: 2, name: 'Vasya', age: 21},
    {id: 3, name: 'Petro', age: 28},
]
fUserBlock(users)

// - створити функцію яка повертає найменьше число з масиву

function minNumWithArray (array) {
    return Math.min(...array)
}
let randomNumArray = [10,20,30,-10]
console.log(minNumWithArray(randomNumArray));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumArray (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        sum += item
    }
    return sum
}
console.log(sumArray(randomNumArray));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log('--------')
function swap (array, index1, index2) {
        let a = []
        a[0] = array[index1];
        array[index1] = array[index2]
        array[index2] = a[0];

}
swap(randomNumArray, 0, 3);
console.log(randomNumArray);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (sumUAH, currencyValues, exchangeValues) {
    for (const item of currencyValues) {
        if (item.currency === exchangeValues) {
            return sumUAH / item.value
        }
    }
}
let result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(result)