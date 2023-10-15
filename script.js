const gridContainer = document.querySelector("#grid-container");

let sizeOfGrid = 4;

for(let i = 0; i < sizeOfGrid; i++){
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j = 0; j < sizeOfGrid; j++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    gridContainer.appendChild(row);
}
