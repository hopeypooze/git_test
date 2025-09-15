const btnRestart = document.querySelector(".restart");
const inputSize = document.querySelector(".size");
const gridContainer = document.getElementById("grid-container");

let gridSize = 16; // default

function createGrid(size) {
  const squareSize = 30; // px
  gridContainer.innerHTML = ""; // Clear grid

  // Set container size to match grid
  const containerSize = squareSize * size;
  gridContainer.style.width = `${containerSize}px`;
  gridContainer.style.height = `${containerSize}px`;

  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);

    gridSquare.addEventListener("mouseover", () => {
      gridSquare.classList.add("marked");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inputSize.value = gridSize; // show default in input
  createGrid(gridSize);
});

btnRestart.addEventListener("click", () => {
  const newSize = parseInt(inputSize.value);
  if (newSize > 0) {
    gridSize = newSize;
  } else {
    gridSize = 16;
  }
  console.log(`Restarting with grid size: ${gridSize}`);
  createGrid(gridSize);
});
