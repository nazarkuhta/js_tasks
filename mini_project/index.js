// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули


fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(users => {
        let wrap = document.createElement(`div`)
        wrap.classList.add(`wrap`)
        for (const user of users) {
            let userDiv = document.createElement(`div`)
            userDiv.classList.add(`userDiv`)
            let userName = document.createElement(`h2`)
            userName.innerText = user.name
            let userId = document.createElement(`h4`)
            userId.innerText = user.id
            let userBtn = document.createElement(`button`)
            userBtn.innerHTML = `<a href="user-details.html">More</a>`

            let detailsKey = `details`
            localStorage.setItem(detailsKey, JSON.stringify([]))
            userBtn.onclick = function (e) {
                e.preventDefault()

                let details = [
                    this.username = user.username,
                    this.email = user.email,
                    this.address = user.address,
                    this.phone = user.phone,
                    this.website = user.website,
                    this.company = user.company
                    ]

                localStorage.setItem(`details`, JSON.stringify(details))
                let detailsJSON = localStorage.getItem(`details`)
                let parse = JSON.parse(detailsJSON)
                parse.push(details)
                localStorage.setItem('details', JSON.stringify(parse))
            }

            userDiv.append(userName, userId, userBtn)
            wrap.append(userDiv)
            document.body.append(wrap)
        }
    }
)







