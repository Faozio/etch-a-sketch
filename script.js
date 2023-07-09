// JavaScript code to create the grid
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
  
    // Create 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      container.appendChild(square);
    }
  });
  