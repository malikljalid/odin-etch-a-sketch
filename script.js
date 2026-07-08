const   GRID_PIXEL_WIDTH = 480;
const   GRID_DIVS_MAX    = 100;

let container = document.querySelector(".container");
let button    = document.querySelector("button");

function getDiv(gridDivs) {
    let square = document.createElement("div");

    square.classList.add("square");

    square.style.width  = `${GRID_PIXEL_WIDTH / gridDivs}px`;
    square.style.height = `${GRID_PIXEL_WIDTH / gridDivs}px`;

    square.addEventListener("mouseenter", () => { square.classList.add("checked"); });

    return (square);
}

function gridInit(gridDivs = 16) {
    for (let i = 0; i < gridDivs * gridDivs; i++) {
        container.appendChild(getDiv(gridDivs));
    }
}

function gridClear() {
    container.innerHTML = "";
}

function gridCreate(gridDivs) {
    gridClear();
    gridInit(gridDivs);
}

function changeGridSize() {
    const input = parseInt(prompt("Enter a grid size (1-100): "));

    if (isNaN(input)) return ;

    if (input < 1 || input > GRID_DIVS_MAX) {
        alert(`Please enter a number between 1 and ${GRID_DIVS_MAX}.`);
        return ;
    }

    gridCreate(input);
}

button.addEventListener("click", changeGridSize);

gridCreate();
