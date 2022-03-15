const computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let result;
    if(randomNum == 1) {
        result = "rock";
    }
    else if(randomNum == 2) {
        result = "paper";
    }
    else {
        result = "scissors";
    }
    return result;
};
const playRound = (pleyerSelection, computerSelection) => {
    let  playerS = pleyerSelection.toLowerCase();
    let computerS = computerSelection;
    let result; 
    if (playerS == computerS) {
        console.log(`you Tie! ${computerS} same as ${playerS}.`);
        result = 0;
    }
    else if (playerS == "rock" && computerS == "paper") {
        console.log(`you Lose! ${computerS} beats ${playerS}.`);
        result = -1;
    }
    else if (playerS == "paper" && computerS == "scissors") {
        console.log(`you Lose! ${computerS} beats ${playerS}.`);
        result = -1;
    }
    else if (playerS == "scissors" && computerS == "rock") {
        console.log(`you Lose! ${computerS} beats ${playerS}.`);
        result = -1;
    }
    else{
        console.log(`you Win! ${playerS} beats ${computerS}.`);
        result = 1;
    }
    return result;
};
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your play(rock,paper or scissors) :");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == 1) {
            playerScore += 1;
        }
        if (roundResult == -1) {
            computerScore += 1;
        }
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}.`);
    }
    if (playerScore > computerScore) {
        console.log("Winner Winner Chicken Dinner ;)");
    }
    else if (playerScore < computerScore) {
        console.log("You allways have been a LOSER!");
    }else {
        console.log("Tie ¯\\_(ツ)_/¯" );
    }
};
game();