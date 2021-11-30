// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById(`content`)
console.log(content.innerText)

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById(`rules`)
console.log(rules.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = `asdqwr`

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = `cbshjvbsdv`

// -- змініть кожному елементу колір фону на червоний

content.style.backgroundColor = `red`
rules.style.backgroundColor = `red`

// -- змініть кожному елементу колір тексту на синій

content.style.color = `blue`
rules.style.color = `blue`

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let fc_rules = document.getElementsByClassName(`fc_rules`)
for (const fcRule of fc_rules) {
console.log(fcRule.classList)
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const fcRule of fc_rules) {
    fcRule.style.color = `red`
}
