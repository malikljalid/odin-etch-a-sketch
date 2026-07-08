const   GRID_PIXEL_WIDTH = 480;
const   GRID_DIVS_MAX    = 100;

const   container   = document.querySelector(".container");
const   button      = document.querySelector("button");

let     gridDivs = 16;
let     grid = Array.from({ length: GRID_DIVS_MAX }, () => Array(GRID_DIVS_MAX));

function gridInit(gridDivs) {
    for (let i = 0; i < gridDivs; i++) {
        for (let j = 0; j < gridDivs; j++) {
            grid[i][j] = document.createElement("div");
            grid[i][j].classList.add("square");
            container.appendChild(grid[i][j]);
        }
    }
}

function gridClear(gridDivs) {
    for (let i = 0; i < gridDivs; i++) {
        for (let j = 0; j < gridDivs; j++) {
            container.removeChild(grid[i][j]);
        }
    }
}

function setNewSquaresSize(square) {
    square.style.width  = String(GRID_PIXEL_WIDTH / gridDivs) + "px";
    square.style.height = String(GRID_PIXEL_WIDTH / gridDivs) + "px";
}

function gridDraw() {
    const squares = document.querySelectorAll(".square");

    squares.forEach( (square) => { setNewSquaresSize(square); } );
    squares.forEach( (square) => square.addEventListener("mouseenter", () => { square.classList.add("checked"); }));
}

gridInit(gridDivs);
gridDraw();

button.addEventListener("click", () => {
    gridClear(gridDivs);
    gridDivs = parseInt(prompt("Enter the new grid size : "));
    gridInit(gridDivs);
    gridDraw();
});
