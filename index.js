//  Grabbing the DOM elements
const grid = document.querySelector(".grid");
const startBtn = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;

// creating grid
function createGrid() {
  // 100 of these elements with a loop (for)
  for (let i = 0; i < width * width; i++) {
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

// moving the snake
function move() {
  if (
    // if snake has hit bottom
    (currentSnake[0] + width >= width * width && direction === width) ||
    // if snake has right wall
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    // if snake has left wall
    (currentSnake[0] % width === 0 && direction === -1) ||
    // if snake has right wall
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains("sanke")
  )
    return clearInterval(timerId);

  // remove last element from current snake array
  const tail = currentSnake.pop();
  // remove styling the last element
  squares[tail].classList.remove("snake");
  // add sqaure in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction);
  // add styling for added element
  squares[currentSnake[0]].classList.add("snake");

  // deal with snake head getting apples
  if (squares[currentSnake[0]].classList.contains("apple")) {
    // grow our snake by adding class="snake"
    squares[currentSnake[0]].classList.remove("apple");
    // grow our snake array
    // generate new apply
    // add one to the score
    // display our score
    // speed up our snake
  }
}
move();

let timerId = setInterval(move, 1000);

// Generating Random Apples
function generateApples() {
  do {
    //  generate a random number
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
}
generateApples();

// 39 is right arrow
// 38 is up arrow
// 37 is left arrow
// 40 is down arrow

// control function

function control(e) {
  if (e.keyCode === 39) {
    console.log("right");
    direction = 1;
  } else if (e.keyCode === 38) {
    console.log("up");
    direction = -width;
  } else if (e.keyCode === 37) {
    console.log("left");
    direction = -1;
  } else if (e.keyCode === 40) {
    console.log("down");
    direction = +width;
  }
}

document.addEventListener("keyup", control);
