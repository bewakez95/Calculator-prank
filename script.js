const operators = ["+", "-", "*", "/", "%"];
// const dot = ["."];
let lastOperator = "";
const audio = new Audio(
  "https://soundcloud.com/user-956186499/kylie-minogue-cant-get-you-outta-my-head-mondello-x-lauwend-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
);
const displayElement = document.querySelector(".display");
let strToDisplay = "";
const btns = document.querySelectorAll(".btn");
// console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    displayElement.classList.remove("prank");

    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }
    // if (dot.includes(val)) {
    //   const lastChar = strToDisplay.slice(-1);
    //   if (dot.includes(lastChar)) {
    //     strToDisplay = strToDisplay.slice(0, -1);
    //   }
    // }

    // console.log(val);

    if (val === "AC") {
      strToDisplay = "";
      display();
      return;
    }
    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      //   console.log(strToDisplay);
      display(strToDisplay);
      return;
    }
    if (val === "=") {
      const lastChar = strToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }

      return total();
    }
    if (val === ".") {
      // findout index of last operator
      const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);
      const lastNumberSet = strToDisplay.slice(lastOperatorIndex);
      //   console.log(lastNumberSet);

      if (lastNumberSet.includes(".")) {
        return;
      }
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    strToDisplay += val;
    // console.log(strToDisplay);

    display(strToDisplay);
    // console.log(strToDisplay);
  });
});
const display = (str) => {
  displayElement.innerText = str || "0.00";
};

const total = () => {
  const prankVal = randomNum();

  const ttl = eval(strToDisplay) + prankVal;
  if (prankVal) {
    audio.play();
    displayElement.classList.add("prank");
  }
  strToDisplay = ttl.toString();
  displayElement.innerText = ttl;
};
const randomNum = () => {
  const num = Math.round(Math.random() * 10);
  return num <= 3 ? num : 0;
};
