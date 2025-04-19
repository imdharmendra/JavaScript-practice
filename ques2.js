let gameNum = 25;
let userNum = prompt("guess the Game number : ");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number, guess again: ");
}
console.log("congratulations, you enterd the right number");