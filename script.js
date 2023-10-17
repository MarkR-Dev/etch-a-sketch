const gridContainer = document.querySelector("#grid-container");
const gridSizeSlider = document.querySelector("#slider");
const clearGridButton = document.querySelector("#clear");
const eraseButton = document.querySelector("#erase");
const penColorBlackButton = document.querySelector("#black");
const randomRgbButton = document.querySelector("#rgb");
const defaultGridSize = 10;
let isMouseClickDown = false;
let isRandomRgbSelected = false;
let penColor = "black";

gridSizeSlider.addEventListener("change", resetGrid);
clearGridButton.addEventListener("click", resetGrid);

eraseButton.addEventListener("click", () => {
    penColor = "white";
    isRandomRgbSelected = false;
});

penColorBlackButton.addEventListener("click", () => {
    penColor = "black";
    isRandomRgbSelected = false;
});

randomRgbButton.addEventListener("click", () => {
    isRandomRgbSelected = true;
});

gridContainer.addEventListener("mousedown", (event) => {
    //Prevents default dragable behaviour of mouse-down from occuring over already painted cells
    event.preventDefault();
    isMouseClickDown = true;

    /*
    Prevents an unwanted effect: Clicking on the outer border
    would color the whole grid container 
    */
    if(event.target.id === "grid-container"){
        return
    }
    /*
    This call to draw was needed to colour in the target cell 
    where the click occurs and subsequent draws will occur when 
    the cursor enters a cell via the cell's event listener
    */
    draw(event);
});

/*
Added the listener to the document instead of the gridContainer
so that if the user keeps left click depressed on the grid and 
moves their cursor off the grid and releases the boolean is updated
*/
document.addEventListener("mouseup", () => {
    isMouseClickDown = false;
});

function createGrid(gridSize){
    gridContainer.textContent = "";

    for(let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        
        for(let j = 0; j < gridSize; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        
        gridContainer.appendChild(row);
    }

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", draw);
    });
}

function resetGrid(){
    createGrid(gridSizeSlider.value);
}

function randomRgb(){
    let r = Math.floor((Math.random() * 255) + 1);
    let g = Math.floor((Math.random() * 255) + 1);
    let b = Math.floor((Math.random() * 255) + 1);

    return `rgb(${r}, ${g}, ${b})`;
}

function draw(event){
    if(isMouseClickDown){

        if(isRandomRgbSelected){
            penColor = randomRgb();
        }

        event.target.style.backgroundColor = penColor; 
    }
}

createGrid(defaultGridSize);