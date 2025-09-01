

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

//getHumanChoice will return one of the valid choices depending on what the user inputs.
function getHumanChoice() {

  let userInput = prompt("Enter rock/scissors/paper:");

  if (!userInput) return null;

  // Normalize input
  input = userInput.trim().toLowerCase();

  // Validate against allowed choices
  const validChoices = ["rock", "paper", "scissors"];
  if (validChoices.includes(input)) {
    return input;
  } else {
    console.log("Invalid choice. Please try again.");
    return null;
  }



}

//Create two new variables named humanScore and computerScore in the global scope, init to 0

let humanScore = 0;
let computerScore = 0;


//Your game will be played round by round. You will write a function that takes the human and computer player 
// choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
//playRound(humanChoice, computerChoice)


function playRound(humanChoice, computerChoice) {
  let conditions = {
    rock: {
      beats: 'scissors',
      beaten_by: 'paper'
    },
    scissors: {
      beats: 'paper',
      beaten_by: 'rock'
    },
    paper: {
      beats: 'rock',
      beaten_by: 'scissors'
    }

  };
  console.log(`human: ${humanChoice} computer: ${computerChoice}`);
  if (humanChoice === computerChoice) { console.log("Draw!"); }
  else if (humanChoice === 'rock' && (conditions.rock.beats === computerChoice) ||
    (humanChoice === 'scissors' && (conditions.scissors.beats === computerChoice)) ||
    (humanChoice === 'paper' && (conditions.paper.beats === computerChoice))
  ) {
    console.log("human wins this round!");
    humanScore++;
  }
  else {
    console.log("computer wins this round!");
    computerScore++;
  }



}



function playGame() {
  let i = 0;
  while (i < 5) {
    let c = getComputerChoice();
    let h = getHumanChoice();
    playRound(h, c);
    i++;
  }
  if (i === 5) {
    let winner = computerScore > humanScore ? 'computer' : 'human';
    console.log(`The ${winner} won!`);
  }

  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

playGame();