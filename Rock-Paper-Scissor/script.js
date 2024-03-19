let userScore = 0;
let compScore = 0;



// 0  - > Rock 
// 1  - > Paper 
// 2  - > Scissors

// 0 - 1 -> 1
// 0 - 2 -> 0
// 1 - 2 -> 2

let choices = ["Rock", "Paper", "Scissors"];

let uScore = document.querySelector("#user-score");

let cScore = document.querySelector("#comp-score");

let msg = document.querySelector(".msg");

let msgContainer = document.querySelector(".msg");

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let op = -1;

rock.addEventListener("click", () => {
    op = 0;
    winnerFinder(op);
})
paper.addEventListener("click", () => {
    op = 1;
    winnerFinder(op);
})
scissors.addEventListener("click", () => {
    op = 2;
    winnerFinder(op);
})

const winnerFinder = (op) => {
    let comp = Math.random() * 3;
    comp = Math.floor(comp);
    if((op === 0 && comp === 2) || (op === 1 && comp === 0) || (op === 2 && comp === 1)){
        // console.log("Congrats! You Won");
        msg.innerText = `You won! Your ${choices[op]} beats computer ${choices[comp]}`;
        msgContainer.setAttribute("class", "won");
        userScore += 1;
    }
    else if(op === comp){
        // console.log("Match Drawn");
        msg.innerText = `Match Draw! You both select ${choices[op]}`;
        msgContainer.setAttribute("class", "draw");
    }
    else{
        // console.log("You loose the Match");
        msg.innerText = `You Losse! Computer's ${choices[comp]} beats Your ${choices[op]}`;
        msgContainer.setAttribute("class", "loose");
        compScore += 1;
    }
    // console.log(userScore, compScore);
    updateScore();
}
const updateScore = () => {
    uScore.innerText = userScore;
    cScore.innerText = compScore;
}