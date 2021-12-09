let favourites = JSON.parse(localStorage.getItem(`favourites`))
console.log(favourites)
for (const favourite of favourites) {
    let div = document.createElement(`div`);
    div.innerText = JSON.stringify(favourite)
document.body.appendChild(div)
}