let boxes = document.querySelectorAll(".box");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let resetbtn = document.querySelector(".reset");
let winner = document.querySelector(".winner");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML !== "") return;
    if (turnO == true) {
      box.innerText = "O";
      player1.innerText = "";
      player2.style.display = "block";
      player2.innerText = "Player 2 Turn";
      turnO = false;
    } else {
      box.innerHTML = "X";
      player1.innerText = "Player 1 Turn";
      player2.innerText = "";
      turnO = true;
    }

    checkWinner();
  });
});

const reset = () => {
  for (let box of boxes) {
    turnO = true;
    box.innerText = "";
    player1.innerText = "Player 1 Turn";
    winner.style.display = "none";
    player2.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.classList.add("disabled");
  }
};

const checkWinner = () => {
  for (let patterns of winPattern) {
    const pos1 = boxes[patterns[0]].innerText;
    const pos2 = boxes[patterns[1]].innerText;
    const pos3 = boxes[patterns[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3 && pos1 == pos3) {
        if (boxes[patterns[0]].innerText === "O") {
          winner.style.display = "block";
          winner.innerText = "Player 1 is Winner";
          player1.innerText = "";
          player2.innerText = "";
          boxes.innerText = "";
          disableBoxes();
        } else {
          winner.style.display = "block";
          winner.innerText = "Player 2 is Winner";
          player1.innerText = "";
          player2.innerText = "";
          boxes.innerText = "";
          disableBoxes();
        }
      }
    }
  }
};
