// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let main_header = document.getElementById(`main_header`)
// main_header.classList.add(`september_2021`)

// b) робить шириниу елементу ul 400px

// document.getElementsByTagName(`ul`).style.width = `400px`



// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkList = document.getElementsByClassName(`linkList`)
// for (const linkListElement of linkList) {
//     linkListElement.style.width = `50%`
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let sddTxt =(text)=>{
//     document.getElementsByClassName(`listElement2`).innerText = text
//
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let li = document.getElementsByTagName(`li`)
// for (const liElement of li) {
//     liElement.style.backgroundColor = `silver`
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let a = document.getElementsByTagName(`a`)
// for (const aElement of a) {
//     aElement.classList.add(`anchor`)
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aList = document.getElementsByTagName(`a`)
// for (const aListElement of aList) {
//     if (a.innerText === `link3`){
//         a.style.fontsize = `40px`
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let alist =document.getElementsByTagName(`a`)
// for (const alistElement of alist) {
//     let classnew = a.innerText
//     a.classList.add(classnew)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeaders = document.getElementsByClassName(`sub-header`)
// for (const subHeader of subHeaders) {
//     subHeader.style.backgroundColor = prompt(`enter color`)
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeaders = document.getElementsByClassName(`sub-header`)
// for (const subHeader of subHeaders) {
//         if (subHeader.innerText === `content 2 segment`){
//             subHeader.style.fontcolor = prompt(`enter color`)
//         }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// document.getElementsByClassName(`content_1`).innerText = prompt(`enter text`)

// l) отримати елементи p та змінити їм padding на 20px

let ps = document.getElementsByTagNameNS(`p`)
for (const p of ps) {
    p.style.padding = `20px`
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
let tex2 = document.getElementsByClassName(`text2`)
for (const tex2Element of tex2) {
    tex2Element.innerText = `september 2021`
}