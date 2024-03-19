let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn =  true;// playerX, playerY



const winPatterns = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8],
];

let count = 0;

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        count += 1;
        console.log(count);
        // console.log("box was clicked");
        if(turn){
            box.innerText="0";
            turn = false;
            box.style.color = 'blue';
        }
        else{
            box.innerText="X";
            turn = true;
            box.style.color = 'red';
        }
        box.disabled = true;
        checkWinner();
        if(count === 9){
            draw();
        }
    });
});

const draw = () => {
    msg.innerText = "OOPS! The game is drawn";
    msgContainer.classList.remove("hide");
    count = 0;
}

// starting the new game on clicking the start button
const newGame = () =>{
    enableBoxes();
    turn0 = true;
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click", () =>{
    newGame();
    count = 0;
});


// reset the game on clicking the reset button

resetBtn.addEventListener("click", () =>{
    resetGame();
    count = 0;
});


// disable all the buttons after winner is decided
const disButton = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

// enable all boxes in case of new game or reset game
 const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }


// Display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations ! The Winner is : ${winner}`;
    msgContainer.classList.remove("hide");
    disButton();
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;

        if(pos0 === pos1 && pos1 === pos2 && pos0 != ""){
            // console.log(pos0, " is winner");
            showWinner(pos0);
        }
    }
}