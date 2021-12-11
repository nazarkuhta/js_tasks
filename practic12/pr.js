// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then(posts => {
    let wrap = document.createElement(`div`)
    wrap.classList.add(`wrap`)
    for (const post of posts) {
        let div = document.createElement(`div`)
        div.classList.add(`post`)
        div.innerHTML = `
        <h2>ID:${post.id}<h2/>
        <h3>${post.title}<h3/>
        <h4>${post.body}<h4/>
        `
        let btn = document.createElement(`button`)
        btn.innerText = `comments`
        btn.onclick = () => {
            fetch(`    https://jsonplaceholder.typicode.com/comments`)
                .then(response => response.json())
                .then(comments => {
                    for (const comment of comments) {
                        if (post.id === comment.id) {
                            let commentDiv = document.createElement(`div`)
                            commentDiv.classList.add(`commentCard`)
                            commentDiv.innerHTML = `
                <h3>ID: ${comment.id}<h3/>
                <h4>Name: ${comment.name}</h4>
                <h5>Email: ${comment.email}</h5>
                <h6>${comment.body}</h6>
                `
                            div.append(commentDiv)
                        }

                    }
                })
        }

        div.append(btn)
        wrap.append(div)
        document.body.append(wrap)
    }

})