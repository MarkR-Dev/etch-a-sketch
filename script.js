const gridContainer = document.querySelector("#grid-container");
const gridContainerWidth = gridContainer.offsetWidth;
const gridContainerHeight = gridContainer.offsetHeight;

let sizeOfGrid = 4;

//Create the required cells in the container and set their size accordingly
for(let i = 0; i < (sizeOfGrid * sizeOfGrid); i++){
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.style.width = `${gridContainerWidth/sizeOfGrid}px`;
    cellDiv.style.height = `${gridContainerHeight/sizeOfGrid}px`;
    gridContainer.appendChild(cellDiv);
}