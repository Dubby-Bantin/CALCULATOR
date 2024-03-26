const inputElement = document.querySelector("input")
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText === "AC") {
            inputElement.value = ""
        } else if(button.innerText === "DEL") {
            inputElement.value = inputElement.value.toString().slice(0, -1)
        } else if(button.innerText === "=") {
            inputElement.value = eval(inputElement.value)
        } else {
            inputElement.value += button.innerText
        } 
    })
});