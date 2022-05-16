// icon
const fa = "fa-solid"
const rockIcon = "fa-hand-back-fist";
const paperIcon = "fa-hand";
const scissorsIcon = "fa-hand-scissors";

//element needed :

// result icon
const playerIcon = document.querySelector(".playerChoice .body i");
const computerIcon = document.querySelector(".computerChoice .body i");

// footer
const playerFooter = document.querySelector(".playerChoice footer h3");
const computerFooter = document.querySelector(".computerChoice footer h3");

//text content
const total = document.getElementById("number");
const result = document.getElementById("result");
const win = document.getElementById("win");
const draw = document.getElementById("draw");
const loss = document.getElementById("loss");

//clickable element
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// score
let winNum = 0;
let drawNum = 0;
let lossNum = 0;
let totalGame = 0;

let match = ["Result : Victory !", "Result : It's a Draw !", "Result : It's a loss...Damn."];

let player;

// computer
let computerHand;

//event listener

rock.addEventListener("click", (e) => {
    totalGame += 1;
    player = "Rock";
    playerIcon.classList = fa;
    playerIcon.classList.add(rockIcon);
    playerFooter.textContent = "Rock";
    computerPick();
    whoWin();
    scoreBoard();
});

paper.addEventListener("click", (e) => {
    totalGame += 1;
    player = "Paper";
    playerIcon.classList = fa;
    playerIcon.classList.add(paperIcon);
    playerFooter.textContent = "Paper";
    computerPick();
    whoWin();
    scoreBoard();
});

scissors.addEventListener("click", (e) => {
    totalGame += 1;
    player = "Scissors";
    playerIcon.classList = fa;
    playerIcon.classList.add(scissorsIcon);
    playerFooter.textContent = "Scissors";
    computerPick();
    whoWin();
    scoreBoard();
});

// function

const computerPick = () => {
    computerIcon.classList = fa;
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        computerHand = "Rock";
        computerIcon.classList.add(rockIcon);
        computerFooter.textContent = "Rock";
    } else if (random == 1) {
        computerHand = "Paper";
        computerIcon.classList.add(paperIcon);
        computerFooter.textContent = "Paper";
    } else if (random == 2) {
        computerHand = "Scissors"
        computerIcon.classList.add(scissorsIcon);
        computerFooter.textContent = "Scissors";
    }

};

const whoWin = () => {
    if (player == computerHand) {
        drawNum += 1;
        result.textContent = `${match[1]}`;
    }

    if (player != computerHand) {
        if (player == "Rock") {
            if (computerHand == "Scissors") {
                winNum += 1;
                result.textContent = `${match[0]}`;
            } else {
                lossNum += 1;
                result.textContent = `${match[2]}`;
            }
        } else if (player == "Paper") {
            if (computerHand == "Rock") {
                winNum += 1;
                result.textContent = `${match[0]}`;
            } else {
                lossNum += 1;
                result.textContent = `${match[2]}`;
            }
        } else if (player == "Scissors") {
            if (computerHand == "Paper") {
                winNum += 1;
                result.textContent = `${match[0]}`;
            } else {
                lossNum += 1;
                result.textContent = `${match[2]}`;
            }
        }
    }
};

const scoreBoard = () => {
    total.textContent = `Games Played : ${totalGame}`;
    win.textContent = `Win : ${winNum}`;
    draw.textContent = `Draw : ${drawNum}`;
    loss.textContent = `Loss : ${lossNum}`;
}