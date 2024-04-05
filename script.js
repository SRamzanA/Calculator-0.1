
let display = document.getElementById("display")
let numberButton = document.querySelectorAll(".b-number")

let displayContent = []
display.textContent = displayContent.join("") 

function deleteall() {
    displayContent = []
    display.textContent = displayContent.join("")
}
function delpop() {
    displayContent.pop()
    display.textContent = displayContent.join("")
}
function displayAddNum(num) {
    displayContent.push(parseInt(num))
    display.textContent = displayContent.join("")
}
function displayAddFunc(fun) {
    if (Number.isInteger(displayContent[displayContent.length-1]) || Number.isFinite(displayContent[displayContent.length-1])) {
        displayContent.push(fun)
        display.textContent = displayContent.join("")
    } else if (displayContent.length == 0) {
        // Ничего
    } else {
        displayContent.pop()
        displayContent.push(fun)
        display.textContent = displayContent.join("")
    }
    
}
function result() {
    res = eval(displayContent.join(""))
    displayContent = [res]
    display.textContent = displayContent.join("")
}
