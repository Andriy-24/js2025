// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б

const areaOfRectangle = (a,b) => a * b;
console.log(areaOfRectangle(2,4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const areaOfACircle = (radius) => Math.PI * (radius * radius);
console.log(areaOfACircle(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

const areaOfTheCylinder = (radius, height) => 2 * Math.PI * radius * (radius + height);
console.log(areaOfTheCylinder(4,6))

// - створити функцію яка приймає масив та виводить кожен його елемент

let randomArray = [1,2,11,32,3652,52,21,'dada']
const itemOfArray = (array) =>{
    for (const item of array) {
        console.log(item)
    }
};
itemOfArray(randomArray)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('lorem ipsum')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createUl1 = (text) => document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
createUl1('lorem')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createUl2 = (text, numLi) => {
    document.write(`<ul>`)
    for (let i = 0; i < numLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
createUl2('ipsum', 2)

// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

let primitiveArray = [11,'wdadwa',false, 142,3e2,'grefs', true, true, 'opkmpoi']

const filterPrimitiveElements = (array) => {

    let booArr = [];
    let numArr = [];
    let strArr = [];
    for (const item of array) {
        if (typeof (item) === 'boolean') {
            booArr.push(item)
        }
        if (typeof (item) === 'string') {
            strArr.push(item)
        }
        if (typeof (item) === 'number') {
            numArr.push(item)
        }
    }
    console.log(booArr)
    console.log(numArr)
    console.log(strArr)
}
filterPrimitiveElements(primitiveArray)

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 0, name: 'John', age: 30},
    {id: 1, name: 'Olya', age: 26},
    {id: 2, name: 'Vasya', age: 21},
    {id: 3, name: 'Petro', age: 28},
]
const userBlock = (array) => {
    for (const item of array) {
        document.write(`<div>${item.id} ${item.name} - ${item.age}</div>`)
    }
}
userBlock(users)

// - створити функцію яка повертає найменьше число з масиву

const minNumOfArray = (array) => Math.min(...array)
let randomNumArray = [10,20,30,-10]
console.log(minNumOfArray(randomNumArray));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sumArr = (array) => {
    let sum = 0
    for (const item of array) {
        sum += item;
    }
    return sum;
}
console.log(sumArr(randomNumArray));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (array, index1, index2) => {
    let a = [];
    a[0] = array[index1];
    array[index1] = array[index2];
    array[index2] = a[0];
    return array;
}
console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues,exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));