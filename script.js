let resetButton = document.querySelector("button#resetBtn")


resetButton.addEventListener("click", function () {
    let userInput = prompt("Size? (max 100)", "16")

    let numerified = Number(userInput)

    if (isNaN(numerified) || Math.floor(numerified) !== numerified || userInput <= 0 || userInput > 100) {
        alert("Input must be a positive integer no larger than 100")
    }
    else makeNewGrid(numerified)

})


function makeNewGrid(size = 16) {
    let container = document.querySelector("div.canvas")
    container.innerHTML = ''

    for (let i = 1; i < size; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        for (let j = 0; j < size; j++) {
            let box = document.createElement("div")
            box.classList.add("box")
            box.addEventListener("mouseenter", function (evt) {
                if (evt.target.style.backgroundColor) {
                    let alpha = evt.target.style.backgroundColor.slice(-5, -1)
                    console.log(alpha)
                    evt.target.style.backgroundColor = getRandomColor(alpha - 0.1)
                }
                else evt.target.style.backgroundColor = getRandomColor()
            })
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}


function getRandomColor(alpha = 0.99) {
    let red = Math.random() * 255
    let blue = Math.random() * 255
    let green = Math.random() * 255
    return `rgba(${red},${green},${blue},${alpha})`

}
makeNewGrid(16)

