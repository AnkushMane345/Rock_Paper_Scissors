let userScore = 0;
let computerScore = 0;

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (['rock', 'paper', 'scissors'].includes(userInput)) {
    return userInput;
  }
  return null;
};

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "It's a tie!";

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    return "🎉 You win!";
  } else {
    computerScore++;
    return "💻 Computer wins!";
  }
};

const updateScore = () => {
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
};

const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  if (!userChoice) return;

  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  document.getElementById("user-choice").innerText =
    "You chose: " + userChoice;

  document.getElementById("computer-choice").innerText =
    "Computer chose: " + computerChoice;

  document.getElementById("winner").innerText = result;

  updateScore();
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  updateScore();

  document.getElementById("user-choice").innerText = "";
  document.getElementById("computer-choice").innerText = "";
  document.getElementById("winner").innerText = "";
};