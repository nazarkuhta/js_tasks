// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let button = document.getElementById(`button`)
// let h1 = document.getElementById(`text`)
// button.onclick = function (){
//     h1.style.display = `none`
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let button1 = document.getElementById(`button1`)
// button1.onclick =function (){
//     button1.style.display = `none`
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

// document.getElementById(`input`).onclick = function (){
// let age = document.getElementById(`age`).value
// if (!age){
//     alert(`please enter your age`)
// }
// else if (age < 18){
//     alert(`your age is too young`)
// }
// else  if (age => 18){
//     alert(`welcome!!!`)
//
// }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике
//

// let menu = document.getElementsByClassName(`menu`)
// let title = document.getElementsByClassName(`title`)
// menu.onclick = function (){
//     title.classList.toggle(`hidden`)
// }

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
//
//
// for (const comment of comments) {
//     let div =document.createElement(`div`)
//     let h3 = document.createElement(`h3`)
//     let p = document.createElement(`p`)
//     let btn = document.createElement(`button`)
//
//     h3.innerText = comment.title
//     p.innerText = comment.body
//     btn.innerText = `click me`
//
//     btn.onclick = function (){
//         p.classList.add(`hidden`)
//     }
//
//    div.append(h3,p,btn)
//
//     document.body.append(div)
// }




//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан