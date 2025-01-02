function getComputerChoice() {
  let rand = Math.random() * 3;
  let choice = rand < 1 ? "Rock" : rand < 2 ? "Scissors" : "Paper";
  return choice;
}

function getHumanChoice() {
  choice = prompt("Choose Rock, Paper or Scissors", "Rock");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase().trim();
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

  if (humanChoice == computerChoice) {
    console.log(`You draw! ${humanChoice} equals ${computerChoice}`);
  } else {
    agg = humanChoice + computerChoice;
    switch (agg) {
      case "RockScissors":
      case "ScissorsPaper":
      case "PaperRock":
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";

      case "ScissorsRock":
      case "PaperScissors":
      case "RockPaper":
        console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
        return "computer";

      default:
        console.log(`"${humanChoice}" is an invalid input. No points.`);
        return;
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;
  let humanSelection;
  let computerSelection;
  while (round < 5) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    winner = playRound(humanSelection, computerSelection);
    switch (winner) {
      case "human":
        humanScore++;
        break;
      case "computer":
        computerScore++;
        break;
      default:
        continue;
    }
    round++;
  }
  if (humanScore > computerScore) {
    console.log(`You won the game :D ${humanScore}-${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lost the game :( ${humanScore}-${computerScore}`);
  } else {
    console.log(`A draw! ${humanScore}-${computerScoreS}`);
  }
}
