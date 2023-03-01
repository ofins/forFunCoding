const checkBtn = document.querySelector("#check")
const password = document.querySelector(".input-box")
const check1 = document.querySelector(".check1")
const check2 = document.querySelector(".check2")
const check3 = document.querySelector(".check3")

//change color of input box base on password validity
function run() {
    let capturedPass = password.value
    let conditions = /^(?=\D)(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)[^\s]{8,16}$/
    let result = conditions.test(capturedPass);
    
    if(result) {
        password.classList.remove("redlight")
        password.classList.add("greenlight")
    } else {
        password.classList.remove("greenlight")
    password.classList.add("redlight")
    }
}

//show checks whenever a condition is met
function runTwo() {

let capturedPass = password.value

//first condition
let conditions1 = /^[^\s]{8,16}$/g
let resultOne = conditions1.test(capturedPass)
if(resultOne) {
    check1.classList.add("show-check")
} else {
    check1.classList.remove("show-check")
}
//second condition
let conditions2 = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)/
let resultTwo = conditions2.test(capturedPass)
if(resultTwo) {
    check2.classList.add("show-check")
} else {
    check2.classList.remove("show-check")
}
//third condition
let condition3 = /^(?=\D)/
let resultThree = condition3.test(capturedPass)
if(resultThree) {
    check3.classList.add("show-check")
} else {
    check3.classList.remove("show-check")
}
}

//hitting the ENTER button will also check
function control(e) {
    if (e.keyCode === 13 ) {
        run()
        runTwo()
    }
}
document.addEventListener('keyup', control)