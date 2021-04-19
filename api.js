/*Создать произвольный елемент с id = text.
 Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
 */
/*const myButton=document.getElementById('myButton');
const text = document.getElementById('text');
text.style.display='block'
myButton.onclick=ev=>{
    text.style.display==='block' ? text.style.display='none' :text.style.display='block'
}*/
/*Создайте кнопку, при клике на которую, она будет скрывать сама себя.*/
// myButton.onclick=ev=>{
//     myButton.style.display==='block' ? myButton.style.display='none' :myButton.style.display='block'
// }
/*Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
    При натисканні на кнопку зчитати інформацію з інпуту та перевірити
    вік чи меньше він ніж 18, та повідомити про це користувача*/
/*const myButton=document.getElementById('myButton');
myButton.onclick=ev=>{
const myInpt=document.getElementById('myInpt');
const value= myInpt.value;
  if(value<18 && value>0){
      alert('you are young')
  }
  if (value>18|| value>110){
      alert(' Welcome')
  }
}*/
/*Создайте меню, которое раскрывается/сворачивается при клике*/
/*const a1=document.getElementById('a1');
const subMenu=document.getElementById('subMenu');
let show= false;
a1.onclick=ev=>{
    if (show){
        subMenu.style.display='block';
        show=false;
    }else {
        subMenu.style.display='none';
      show=true;
    }
}*/

/*Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вывести список комментариев в документ, каждый в своем блоке.
    Добавьте каждому комментарию по кнопке для сворачивания его body.*/
/*let comment=[
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
];
const commentMenu=document.getElementById('contentrt');
comment.forEach(elem=>{
    const div=document.createElement('div');
    const h2=document.createElement('h2');
    const p=document.createElement('p');
    const myBtn=document.createElement('button');
    myBtn.innerText='main'
    h2.innerText=elem.title;
    p.innerText=elem.body;
    myBtn.onclick=()=>{
        p.hidden ? p.hidden  =false :p.hidden=true
    }
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(myBtn);
    commentMenu.appendChild(div);
})*/
/*Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*/
/*const butt=document.getElementById('btn');
const inpt1=document.getElementById('inpt1');
const inpt2=document.getElementById('inpt2');
const inpt3=document.getElementById('inpt3');
const inpt4=document.getElementById('inpt4');
butt.onclick=ev=>{
    console.log(inpt1.value)
    console.log(inpt2.value)
    console.log(inpt3.value)
    console.log(inpt4.value)
}*/

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
/*const commentMenu=document.getElementById('contentrt');
function tableCr (rows,cols,tag){
    const table=document.createElement('table');
    for (let i = 0; i < rows; i++) {
       const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerHTML = i.toString()+j.toString();
            tr.appendChild(td);
        }
       table.appendChild(tr) ;
    }
    tag.appendChild(table);
}
tableCr(4,5,commentMenu);*/
/*Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.*/
/*let imgArr=[
    {
        alt:'OnePic',
        url:'./img/Vrzv.png'
    },{
        alt:'OneT',
        url:'./img/GFerU8typ-4.jpg'
    },{
        alt:'OneTH',
        url:'./img/f_15134889.jpg'
    }
];
const left=document.getElementById('ButL')
const right=document.getElementById('ButR')
const imgCont=document.getElementById('imgCont')
let currentIndex = 0;
left.onclick=()=>{
    currentIndex -1 < 0
       ? currentIndex=imgArr.length-1
        : currentIndex=currentIndex -1

    imgCont.src = imgArr[currentIndex].url
    imgCont.alt = imgArr[currentIndex].alt
};
right.onclick=()=>{
   currentIndex + 1 > imgArr.length -1
       ? currentIndex = 0
       : currentIndex=currentIndex+1

    imgCont.src = imgArr[currentIndex].url;
    imgCont.alt = imgArr[currentIndex].alt;
};*/
/*Сворити масив нецензцрних слів.
    Сворити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку*/
/*const inpt = document.getElementById('profanity');
 const buttOne = document.getElementById('buttOne');
 const words =['ass','resr','bullsh']
 buttOne.onclick =ev=> {
     const text= inpt.value;
     const profan = words.includes(text);
     if(profan) {
         alert('STop');
         console.log(text);
     }
}*/
/*Сворити масив нецензцрних слів.
    Сворити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку*/
/*const inputField = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');
const elems = [].slice.call(document.querySelectorAll('body *')).filter(el => !el.closest('#search-form') && el.tagName !== 'SCRIPT');
alert('Проведите проверку на слова: ass,resr,bullsh')
function search(event) {
    event.preventDefault();
    const searchString = inputField.value;
   let matches = 0;

    elems.forEach((elem, index) => {
        if (elem.innerText.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
            matches++;
            elem.style.color = 'red';
        } else {
            elem.style.color = 'initial';
        }
    });

    alert( `Слово ${searchString} найдено ${matches} раз. Предуреждение дальньйшее использование этих слов приведет к бану!`);
}

document.querySelector('input[type="submit"]').addEventListener('click', search);*/


const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
/*
Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
2й - залишає старших 29 років включно
3й - залишає тих в кого місто Київ
Дані виводить в документ*/

const boxUser= document.getElementById('boxUser');
const userDiv=document.createElement('div');
userDiv.appendChild(renderUserWithAddress(usersWithAddress));

const input1 =document.createElement('input');
const input2 =document.createElement('input');
const input3 =document.createElement('input');

 const label1= document.createElement('label');
 const label2= document.createElement('label');
 const label3= document.createElement('label');

const butL=document.createElement('button');

label1.innerText= 'Married';
label2.innerText= 'age';
label3.innerText= 'city-Kyiv';

butL.innerText= 'Filter';

input1.type='checkbox';
input2.type='checkbox';
input3.type='checkbox';

boxUser.appendChild(label1);
boxUser.appendChild(input1);
boxUser.appendChild(label2);
boxUser.appendChild(input2);
boxUser.appendChild(label3);
boxUser.appendChild(input3);

boxUser.appendChild(butL);
butL.onclick =ev=>{
    let filterUser=JSON.parse(JSON.stringify(usersWithAddress))
    if (input1.checked)filterUser=filterUser.filter(value => value.isMarried === false);
    if(input2.checked)filterUser=filterUser.filter(value => value.age >=29);
    if (input3.checked)filterUser=filterUser.filter(value => value.address.city === 'Kyiv');
    userDiv.innerHTML="";
    userDiv.appendChild(renderUserWithAddress(filterUser));
    for (let user of filterUser) {
 document.write(`<div>Id: ${user.id} Name: ${user.name} Age: ${user.age} Married: ${user.isMarried} City: ${user.address.city}</div>`)
}}

function renderUserWithAddress(array) {
    const generate= document.createElement('div');
    array.forEach(elem=>{
        const div=document.createElement('div');
        div.innerText=JSON.stringify(elem);
        generate.appendChild(div);
    })
    return generate;
}

