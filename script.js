// //your JS code here. If required.

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const container = document.querySelector('.container');

// Create 800 squares dynamically
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  // Apply a random color to each square on hover
  square.addEventListener('mouseenter', () => {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
    
    // Set a timeout to reset the color after 1 second
    setTimeout(() => {
      square.style.backgroundColor = '#fff';  // Reset to initial color
    }, 1000);
  });

  container.appendChild(square);
}
