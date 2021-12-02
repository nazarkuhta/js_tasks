// // Все робити за допомоги js.
// // - створити блок,
//
// let div = document.createElement(`div`)
//
// //     - додати йому класи wrap, collapse, alpha, beta
//
// div.classList.add(`wrap`)
// div.classList.add(`collapse`)
// div.classList.add(`alpha`)
// div.classList.add(`beta`)
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// div.style.backgroundColor =`black`
// div.style.color =`white`
// div.style.fontSize = `51px`
//
// // - додати цей блок в body.
//
// document.body.appendChild(div)
//
// // - клонувати його повністю, та додати клон в body.
//
// document.body.appendChild(div.cloneNode(true))

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let menuItems = ['Main','Products','About us','Contacts']
// let menu = document.getElementsByClassName(`menu`)[0]
// for (const item of menuItems) {
//     let li = document.createElement("li")
//     li.innerText = item
//     menu.appendChild(li)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement("div")
//     div.innerText = `${item.title} ${item.monthDuration}`
//     document.body.appendChild(div)
// }



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement("div")
//     div.classList.add(`item`)
//     let h1 = document.createElement("h1")
//     let p = document.createElement(`p`)
//     p.classList.add(`description`)
//     h1.classList.add(`heading`)
//     div.append(h1,p)
//     h1.innerText = `${course.title}`
//     p.innerText = `${course.monthDuration}`
//     document.body.appendChild(div)
// }



