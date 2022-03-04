//  Grabbing the DOM elements
const grid = document.querySelector(".grid");
const startBtn = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
// creating grid
function createGrid() {
  // 100 of these elements with a loop (for)
  for (let i = 0; i < 100; i++) {
    // create elements
    const square = document.createElement("div");
    // add styles to the element
    square.classList.add("square");
    // put the element into our grid
    grid.appendChild(square);
    // push it into a new squares array
    squares.push(square);
  }
}
createGrid();

currentSnake.forEach((index) => squares[index].classList.add("snake"));

function move() {
  // remove last element from current snake array
  const tail = currentSnake.pop();
  // remove styling the last element
  squares[tail].classList.remove("snake");
  // add sqaure in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction);
  // add styling for added element
  squares[currentSnake[0]].classList.add("snake");
}

move();

let timerId = setInterval(move, 1000);
