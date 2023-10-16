const gridContainer = document.querySelector("#grid-container");
const gridSizeSlider = document.querySelector("#slider");
const clearGridButton = document.querySelector("#clear");
const defaultGridSize = 10;
let isClicked = false;

gridSizeSlider.addEventListener("change", resetGrid);
clearGridButton.addEventListener("click", resetGrid);

gridContainer.addEventListener("mousedown", (event) => {
    //Prevents default dragable behaviour of mouse-down from occuring over already painted cells
    event.preventDefault();
    isClicked = true;

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
    the cursor enters a cell via mouse enter
    */
    draw(event);
});

/*
Added the listener to the document instead of the gridContainer
so that if the user keeps left click depressed on the grid and 
moves their cursor off the grid and releases the boolean is updated
*/
document.addEventListener("mouseup", () => {
    isClicked = false;
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

function draw(event){
    if(isClicked){
        event.target.style.backgroundColor = "black"; 
    }
}

createGrid(defaultGridSize);