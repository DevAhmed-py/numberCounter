let countDisplay = document.querySelector(".display")
let decreaseBtn = document.getElementById("decrease-btn")
let resetBtn = document.getElementById("reset-btn")
let increaseBtn = document.getElementById("increase-btn")

countDisplay.textContent = 0

decreaseBtn.addEventListener("click", function() {
    countDisplay.textContent -= 1
    countDisplay.style.color = "red"
})

resetBtn.addEventListener("click", function() {
    countDisplay.textContent = 0
    countDisplay.style.color = "black"
})

increaseBtn.addEventListener("click", function() {
    countDisplay.textContent++
    countDisplay.style.color = "green"
})
