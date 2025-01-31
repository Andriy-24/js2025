// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Hello!</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello! ${i}</div>`)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i1 = 0;
// while (i1 < 20) {
//     document.write('<h1>Okten</h1>');
//     i1++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i2 = 1;
// while (i2 <= 20) {
//     document.write(`<h1>Okten ${i2}</h1>`);
//     i2++;
// }



// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:


// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write('<ul>');
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write('</ul>');

// -----------------------------------------------

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     document.write(`<div>
//                 <h3>${product.title} - ${product.price} UAH</h3>
//                 <img src="${product.image}" alt="${product.title}" style="width: 200px">
// </div>`)
// }

// --------------------

//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true

// for (const user of users) {
//     if  (user.status) {
//         document.write(`<H3>${user.status}<H3>`);
//     }
// }

// - користувачів зі статусом false

// for (const user of users) {
//     if (!user.status) {
//         document.write(`<H3>${user.status}<H3>`);
//     }
// }

// - користувачів які старші за 30 років

// for (const user of users) {
//     if (user.age >= 30) {
//         document.write(`<H3>${user.age}<H3>`);
//     }
// }

// Additional 1

// --створити масив з:

//     - з 5 числових значень

// let nArray = [1,2,6,24,635]
// for (const item of nArray) {
//     console.log(item)
// }
// for (let i = 0; i < nArray.length; i++) {
//     const item = nArray[i];
//     console.log(item);
// }

// - з 5 стрічкових значень

// let sArray = ['dwaf2512ra','wd242','hjfgfew','qweqsa','adasswd']
// for (const item of sArray) {
//     console.log(item);
// }
// for (let i = 0; i < sArray.length; i++) {
//     const item = sArray[i];
//     console.log(item);
// }

// - з 5 значень стрічкового, числового та булевого типу

// let nsbArray = [222,'dasdwa2',1,false,'24524add',247, true,'data24',true,'daw152',true,1413,'6fsf',false,247];
// for (const item of nsbArray) {
//     console.log(item)
// }
// for (let i = 0; i < nsbArray.length; i++) {
//     const item = nsbArray[i];
//     console.log(item);
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let clearMassive = []
// for (let i = 0; i < 14; i++) {
//     clearMassive[i] = i+1
// }
// console.log(clearMassive);

let Array = [2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while

// let iArr = 0
// while (iArr < Array.length) {
//     console.log(Array[iArr])
//     iArr++;
// }

//     2. перебрати його циклом for

// for (const number of Array) {
//     console.log(number)
// }

//     3. перебрати циклом while та вивести числа тільки з непарним індексом

// let iArr2 = 1;
// while (iArr2 < Array.length) {
//     console.log(Array[iArr2]);
//     iArr2 = iArr2+2
// }

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

// for (let i = 1; i < Array.length; i=i + 2) {
//     const arr = Array[i];
//     console.log(arr)
// }

// 5. перебрати циклом while та вивести числа тільки парні значення

// let iArr3 = 0;
// while (iArr3 < Array.length) {
//     if (Array[iArr3] % 2 === 0) {
//         console.log(`Even - ${Array[iArr3]}`);
//     }
//     // else if (Array[iArr3] % 2 !== 0)   {
//     //     console.log(`Odd - ${Array[iArr3]}`);}
//     iArr3++;
// }

// 6. перебрати циклом for та вивести числа тільки парні значення

// for (const number of Array) {
//     if (number % 2 === 0) {
//         console.log(`Even - ${number}`)
//     }else if (number % 2 !== 0) {
//         console.log(`Odd - ${number}`)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < Array.length; i++) {
//     if (Array[i] % 3 === 0) {
//         Array[i] = 'okten'
//     }
// }
// console.log(Array)

// 8. вивести масив в зворотньому порядку.

// for (let i = Array.length -1; i >= 0; i--) {
//     console.log(Array[i])
// }



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

// let iAR = Array.length -1;
// while (iAR >=0) {
//     console.log(Array[iAR])
//     iAR--;
// }

// 2. перебрати його циклом for

// for (let i = Array.length -1 ; i >= 0; i--) {
//     const arrayElement = Array[i];
//     console.log(arrayElement);
// }

// 3. перебрати циклом while та вивести числа тільки з непарним індексом

// let iAR2 = Array.length -1;
// while (iAR2 >= 0){
//     console.log(Array[iAR2]);
//     iAR2 = iAR2 - 2;
// }

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

// for (let i = Array.length -1; i >= 0; i=i-2) {
//     console.log(Array[i])
// }

// 5. перебрати циклом while та вивести числа тільки парні значення

// let iAR1 = Array.length -1;
// while (iAR1 >= 0) {
//     if (Array[iAR1] % 2 === 0) {
//         console.log(Array[iAR1]);
//     }
//     iAR1--;
// }


// 6. перебрати циклом for та вивести числа тільки парні значення

// for (let i = Array.length - 1; i >= 0; i--) {
//     if (Array[i] % 2 === 0) {
//         console.log(Array[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = Array.length - 1; i >= 0; i--) {
//     if (Array[i] %3 === 0) {
//         Array[i] = 'okten'
//     }
//     console.log(Array[i])
// }

let snbArray = [1,6,'dsawd','dasdawd',true, false,252,252,'dada','dsawd',true, true, 'dwadsssw', 'sdwsdw',24,111, false, false]
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (const item of snbArray) {
    if (typeof item === "boolean") {
        console.log(item)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const item of snbArray) {
    if (typeof item === "number") {
        console.log(item)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const item of snbArray) {
    if (typeof item === "string") {
        console.log(item)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// створити масив книжок (назва, кількість сторінок, автори, жанри).
// -знайти найбільшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор