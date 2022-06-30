const btnR = document.getElementById('btnR');
const btnP = document.getElementById('btnP');
const btnS = document.getElementById('btnS');
const btns = document.querySelectorAll('.btn');
const main = document.getElementById('main');
const display = document.getElementById('display');
const playerCounter = document.getElementById('counterP');
const computerCounter = document.getElementById('counterC');
let playerS;
let playerScore = 0;
let computerScore = 0;

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
    let  playerS = pleyerSelection;
    let computerS = computerSelection;
    let result; 
    if (playerS == computerS) {
        display.innerHTML = `you Tie! ${computerS} same as ${playerS}.`;
        result = 0;
    }
    else if (playerS == "rock" && computerS == "paper") {
        computerScore += 1;
        display.innerHTML = `you Lose! ${computerS} beats ${playerS}.`;
        playerCounter.innerHTML = playerScore;
        computerCounter.innerHTML = computerScore;
        result = -1;
    }
    else if (playerS == "paper" && computerS == "scissors") {
        computerScore += 1;
        display.innerHTML = `you Lose! ${computerS} beats ${playerS}.`;
        playerCounter.innerHTML = playerScore;
        computerCounter.innerHTML = computerScore;
        result = -1;
    }
    else if (playerS == "scissors" && computerS == "rock") {
        computerScore += 1;
        display.innerHTML = `you Lose! ${computerS} beats ${playerS}.`;
        playerCounter.innerHTML = playerScore;
        computerCounter.innerHTML = computerScore;
        result = -1;
    }
    else{
        playerScore += 1;
        display.innerHTML = `you Win! ${playerS} beats ${computerS}.`;
        playerCounter.innerHTML = playerScore;
        computerCounter.innerHTML = computerScore;
        result = 1;
    }
    return result;
};

const game = (pS) => {
    let computerSelection = computerPlay();
    playRound(pS, computerSelection);
    
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
            main.innerHTML = `<div style="border: 2px solid black;border-radius: 8px;margin-top:100px;">
            <h1>Winner Winner Chicken Dinner ;)</h1><br>
            <h2>Congrats you have beat the Computer</h2>
            </div>`;
        }
        else if (playerScore <= 5) {
            main.innerHTML = `<div style="border: 2px solid black;border-radius: 8px;margin-top:100px;">
            <h1>You allways have been a LOSER!</h1><br>
            <h2>A computer beat your dump ass</h2>
            </div>`;
        }
    }else{
        return;
    }
    
};

btnR.addEventListener('click', function(e){
    playerS = e.target.value;
    game(playerS);
});

btnP.addEventListener('click', function(e){
    playerS = e.target.value;
    game(playerS);
});

btnS.addEventListener('click', function(e){
    playerS = e.target.value;
    game(playerS);
});

