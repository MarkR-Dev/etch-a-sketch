const gridContainer = document.querySelector("#grid-container");
const slider = document.querySelector("#slider");

slider.addEventListener("change", resetGrid);

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

function resetGrid(event){
    createGrid(event.target.value)
}

function draw(event){
    event.target.style.backgroundColor = "black";  
}

//let sizeOfGrid = 4;
createGrid(10);