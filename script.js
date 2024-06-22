let display = document.getElementById("display")
let numberButton = document.querySelectorAll(".b-number")

let displayContent = []
display.textContent = displayContent.join("") 

function deleteall() {
    // Делаем displayContent[] пустым
    displayContent = []
    display.textContent = displayContent.join("")
}
function delpop() {
    // Удаляем последний элемент
    displayContent.pop()
    display.textContent = displayContent.join("")
}
function displayAddNum(num) {
    // Добавляем значение в displayContent[]
    displayContent.push(parseInt(num))
    display.textContent = displayContent.join("")
}
function displayAddFunc(fun) {
    if (fun == "^") {
        fun = "**"
    } else if (fun == "÷") {
        fun = "/"
    }

    // Если последний символ - число, то вставляем {fun}
    if (Number.isInteger(displayContent[displayContent.length-1]) || Number.isFinite(displayContent[displayContent.length-1])) {
        displayContent.push(fun)
        display.textContent = displayContent.join("")
    // Если список пуст - ничего не делаем
    } else if (displayContent.length == 0) {
        return
    // Если последнее значение списка - знак, то удаляем его и вставляем {fun}
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
