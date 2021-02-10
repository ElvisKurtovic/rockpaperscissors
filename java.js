let comptuerChoice = 'rock'
let choices = ['rock', 'paper', 'scissors']

function playerChoice(choice) {
    console.log(choice)
    possibleChoices()
    if (choice == comptuerChoice) {
        console.log("tie")
        tie()
    } else if (choice == 'rock' && comptuerChoice == 'scissors') {
        console.log("You win")
        win()
    } else if (choice == 'rock' && comptuerChoice == 'paper') {
        console.log("You lose")
        lose()
    } else if (choice == 'paper' && comptuerChoice == 'paper') {
        console.log("tie")
        tie()
    } else if (choice == 'paper' && comptuerChoice == 'rock') {
        console.log("You win")
        win()
    } else if (choice == 'paper' && comptuerChoice == 'scissors') {
        console.log("You lose")
        lose() 
    } else if (choice == 'scissors' && comptuerChoice == 'rock') {
        console.log("You lose")
        lose()
    } else if (choice == 'scissors' && comptuerChoice == 'paper') {
        console.log("You win")
        win()
    } else if (choice == 'scissors' && comptuerChoice == 'scissors') {
        console.log("tie")
        tie()
    }
}

function possibleChoices() {
    let index = Math.floor(Math.random() *choices.length) 

    comptuerChoice = choices[index]
}

function win() {
    document.getElementById("results").innerText = "You Win"
}
function lose() {
    document.getElementById("results").innerText = "You Lose"
}
function tie() {
    document.getElementById("results").innerText = "Tie"
}