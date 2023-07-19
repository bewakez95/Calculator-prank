let max = parseInt(prompt("ENTER YOUR MAXIMUM NUMBER"));
while (!max) {
  max = parseInt(prompt("ENTER A VALID MAXIMUM NUMBER"));
}
const target = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter your first guess/ Press q to quit");
let attempt = 1;
// console.log(target);

while (parseInt(guess) !== target) {
  if (guess === "q") {
    break;
  }
  guess = parseInt(guess);
  if (guess > target) {
    guess = prompt("Number you guessed is Too high");
    attempt += 1;
  } else if (guess < target) {
    guess = prompt("Number you guessed is Too low");
    attempt += 1;
  } else {
    guess = prompt("Invalid guess, please guess a valid number");
  }
  //   console.log(target);
}
if (guess === "q") {
  console.log(`You quit!`);
} else console.log(`You got it and it took you ${attempt} Attempts!!`);
