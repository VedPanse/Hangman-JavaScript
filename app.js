const game1 = new Hangman("New Jersey", 10)

document.querySelector("h1").textContent = game1.getPuzzle()
document.querySelector("p").textContent = game1.remainingGuesses
let calculateStatus = "playing"
const checkGuesses = function () {
    if (game1.remainingGuesses == 0) {
        calculateStatus = "failed"
    } else if (!game1.getPuzzle().includes("*")) {
        calculateStatus = "finished"
    } else {
        calculateStatus = "playing"
    }
}


window.addEventListener("keypress", function (e) {

    const guess = String.fromCharCode(e.charCode)

    this.document.querySelector("h1").textContent = game1.getPuzzle()
    this.document.querySelector("p").textContent = game1.remainingGuesses
    game1.makeGuess(guess)
    checkGuesses()
    
    if (calculateStatus === "finished") {
        alert("You won.")
    } else if (calculateStatus === "failed") {
        this.alert("You lost")
    }
})

