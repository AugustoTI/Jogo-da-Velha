const squares = document.querySelectorAll(".square");
document.addEventListener("DOMContentLoaded", () => {
   squares.forEach((square) => {
      square.addEventListener("click", handleClick);
   });
});

function handleClick(event) {
   const square = event.target;
   const position = square.id;
   handleMove(position);
   updateSquares();
}

function updateSquares() {
   squares.forEach((square) => {
      let position = square.id;
      let sybols = board[position];
      if (sybols !== "") square.innerHTML = `<div class='${sybols}'></div>`;
   });
}
