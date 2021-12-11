// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then(users => {
//     let wrap = document.createElement(`div`)
//     wrap.classList.add(`wrap`)
//     for (const user of users) {
//         let divPost = document.createElement(`div`)
//         divPost.classList.add(`post`)
//         divPost.innerHTML = `
// <h2>ID : ${user.id}</h2>
// <h3>${user.title}</h3>
// <h4>${user.body}</h4>
// `
//         wrap.append(divPost)
//         document.body.append(wrap)
//     }
//
// })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// fetch(`https://jsonplaceholder.typicode.com/comments`).then(response => response.json()).then(comments =>{
//     let wrap = document.createElement(`div`)
//     wrap.classList.add(`wrap`)
//     for (const comment of comments) {
//         let divCom = document.createElement(`div`)
//         divCom.classList.add(`comment`)
//         divCom.innerHTML = `
//         <h2>ID: ${comment.id}<h2/>
//         <h3>Name: ${comment.name}</h3>
//         <h4>Email: ${comment.email}</h4>
//         <h5>${comment.body}</h5>
//         `
//         wrap.append(divCom)
//         document.body.append(wrap)
//
//
//     }
//
//
// })



