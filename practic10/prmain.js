// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// document.getElementById(`btn`).onclick = function () {
//     let i11 = document.forms.f1.i11.value
//     let i12 = document.forms.f1.i12.value
//     let i21 = document.forms.f2.i21.value
//     let i22 = document.forms.f2.i22.value
// }
// console.log(i11,i12,i21,i22)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let tab = document.forms.tabCreator
// tab.onsubmit = function (e){
//     e.preventDefault()
//     let rows = + tabCreator.rows.value
//     let columns = + tabCreator.columns.value
//     let content = tabCreator.content.value
//     console.log(rows,columns,content)
//     let table = document.createElement(`table`)
//
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement(`tr`)
//         table.append(tr)
//         for (let j = 0; j < columns; j++) {
// let td = document.createElement(`td`)
//             tr.append(td)
//             td.innerText = content
//         }
//
//     }
//     document.body.append(table)
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['свиня', 'редиска', 'дурачок']
// let btn = document.getElementById(`btn`)
// btn.onclick = function (){
//     let word = document.getElementById(`bad`).value
//     for (const badWord of badWords) {
// if (badWord === word){
//     alert()
//
// }
//     }
// }

    //
    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    // Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку


// let badWords = ['свиня', 'редиска', 'дурачок']
// let btn = document.getElementById(`btn`)
// btn.onclick = function (){
//     let word = document.getElementById(`bad`).value
//     for (const badWord of badWords) {
// if (word.includes(badWord)){
//     alert()
//
// }
//     }
// }