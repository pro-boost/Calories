let computersChoice;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choice.length);
  computersChoice = choice[random];
  return computersChoice;
}

computersChoice = getComputerChoice();



function playRound(playersChoice){
  let result;
  playersChoice = playersChoice.toLowerCase();
  if ((playersChoice==="rock" && computersChoice==="paper")||(playersChoice==="paper" && computersChoice==="scissors")||(playersChoice==="scissors" && computersChoice==="rock")){
    result="you lose " + computersChoice + " beats " +playersChoice;
  }else if ((playersChoice==="rock" && computersChoice==="scissors")||(playersChoice==="paper" && computersChoice==="rock")||(playersChoice==="scissors" && computersChoice==="paper")){
    result="you win , " + playersChoice + " beats " + computersChoice;
  }else {
  result="It's a draw!";
  }

  return result;
}
playersChoice=prompt();
console.log(playRound(playersChoice));

console.log("Player's Choice is " + playersChoice);
console.log("Computers's Choice is " + computersChoice);


