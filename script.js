document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  // Create initial 16x16 grid
  createGrid(16);

  // Add reset button functionality
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', () => {
    const gridSize = prompt('Enter the number of squares per side for the new grid (maximum: 100):');
    const parsedGridSize = parseInt(gridSize);

    // Validate the user input
    if (!isNaN(parsedGridSize) && parsedGridSize > 0 && parsedGridSize <= 100) {
      // Clear the current grid
      container.innerHTML = '';

      // Create the new grid with the user-defined size
      createGrid(parsedGridSize);
    } else {
      alert('Invalid input. Please enter a positive number up to 100 for the grid size.');
    }
  });

  function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const squareSize = 400 / size; // Adjust the total size of the container (400px) based on the number of squares per side
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.style.width = `${squareSize}px`; // Set the width of each square dynamically
      square.style.height = `${squareSize}px`; // Set the height of each square dynamically
      container.appendChild(square);
    }

    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
      let isDrawing = false; // Indicates whether the "pen" is currently drawing

      square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.classList.add('hovered');
      });

      square.addEventListener('mouseenter', () => {
        if (isDrawing) {
          square.classList.add('hovered');
        }
      });

      square.addEventListener('mouseup', () => {
        isDrawing = false;
      });

      square.addEventListener('mouseleave', () => {
        if (isDrawing) {
          square.classList.add('hovered');
        }
      });
    });
  }
});