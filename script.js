function createGrid(gridSize){
    const gridContainer = document.querySelector("#grid-container");

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
        cell.addEventListener("mouseenter", draw)
    });
}

function draw(event){
    event.target.style.backgroundColor = "black";  
}

let sizeOfGrid = 4;
createGrid(sizeOfGrid)