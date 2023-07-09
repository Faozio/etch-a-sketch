// JavaScript code to create the grid and set up hover effect
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
  
    // Create 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      container.appendChild(square);
    }
  
    // Add hover effect
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
      square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
      });
  
      square.addEventListener('mouseleave', () => {
        square.classList.remove('hovered');
      });
    });
  });
  