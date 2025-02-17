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
      square.style.backgroundColor = '#1d1d1d';  // Change the reset color to match expected value (rgb(29, 29, 29))
    }, 1000); // 1 second for hover effect duration
  });

  square.addEventListener('mouseleave', () => {
    // Reset the color after mouse leaves, after the timeout for smooth transition
    square.style.backgroundColor = '#1d1d1d'; // This matches the expected color in the test (rgb(29, 29, 29))
  });

  container.appendChild(square);
}
