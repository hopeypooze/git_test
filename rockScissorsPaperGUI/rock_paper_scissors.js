// Select all buttons with the class 'btn'
const buttons = document.querySelectorAll(".btn");
const again = document.querySelector(".again");
const main = document.querySelector(".main");
const altmain = document.querySelector(".altmain");
altmain.classList.add("hidden");
//initial message
let message = document.querySelector(".message");

let humanScore = document.querySelector(".humanscore");
// //Create two new variables named humanScore and computerScore in the global scope, init to 0

let computerScore = document.querySelector(".computerscore");

let humanChoice;

// let roundCount = 4; //count down from this to determine end of game

//getComputerChoice:randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  let compChosen;
  switch (compChoice) {
    case 0:
      compChosen = "rock";
      break;
    case 1:
      compChosen = "paper";
      break;
    case 2:
      compChosen = "scissors";
      break;
  }
  return compChosen;
}

// Loop through each button and add a click event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`You clicked: ${button.textContent}`);

    if (humanScore === 5 || computerScore === 5) {
      let winner = humanScore > computerScore ? "Human" : "Computer";
      document.querySelector(
        ".message"
      ).textContent = `Game over, ${winner} won!`;
      main.classList.add("hidden");
      altmain.classList.remove("hidden");
    } else {
      // roundCount--;
      humanChoice = button.textContent.toLowerCase();

      const computerChoice = getComputerChoice();
      console.log(getComputerChoice());
      playRound(humanChoice, computerChoice);
    }
  });
});

function playRound(humanChoice, computerChoice) {
  let conditions = {
    rock: {
      beats: "scissors",
      beaten_by: "paper",
    },
    scissors: {
      beats: "paper",
      beaten_by: "rock",
    },
    paper: {
      beats: "rock",
      beaten_by: "scissors",
    },
  };
  console.log(`human: ${humanChoice} computer: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    document.querySelector(".message").textContent = "Draw!";
    // console.log("Draw!");
  } else if (
    (humanChoice === "rock" && conditions.rock.beats === computerChoice) ||
    (humanChoice === "scissors" &&
      conditions.scissors.beats === computerChoice) ||
    (humanChoice === "paper" && conditions.paper.beats === computerChoice)
  ) {
    // console.log("human wins this round!");
    document.querySelector(".message").textContent = "Human wins this round!";
    humanScore++;
    document.querySelector(".humanscore").textContent = humanScore;
  } else {
    // console.log("computer wins this round!");
    document.querySelector(".message").textContent =
      "Computer wins this round!";
    computerScore++;
    document.querySelector(".computerscore").textContent = computerScore;
  }
}
again.addEventListener("click", () => {
  window.location.reload();
});
// function playGame() {
//   let i = 0;
//   while (i < 5) {
//     let c = getComputerChoice();
//     let h = getHumanChoice();
//     playRound(h, c);
//     i++;
//   }
//   if (i === 5) {
//     let winner = computerScore > humanScore ? 'computer' : 'human';
//     console.log(`The ${winner} won!`);
//   }

//   console.log(`Human: ${humanScore}`);
//   console.log(`Computer: ${computerScore}`);
// }

// playGame();
