let characters = [];

// Function to fetch and display the portraits
function fetchPortraits() {
  fetch('characters.json')
    .then(response => response.json())
    .then(data => {
      characters = Object.values(data).filter(character => character.role === 'killer');
      startRandomizer();  // Start randomizer after fetching the killer portraits
    })
    .catch(error => {
      console.error('Error fetching or processing data:', error);
    });
}

// Slot effect function
function startRandomizer() {
  if (characters.length === 0) {
    console.error('No killer portraits available');
    return;
  }

  const portraitElement = document.getElementById('portrait');
  const duration = 5000; // Duration of the effect in milliseconds
  const intervalTime = 100; // Interval time for changing portraits
  const totalIterations = duration / intervalTime;
  let iteration = 0;

  const intervalId = setInterval(() => {
    if (iteration >= totalIterations) {
      clearInterval(intervalId);
      // Show a final random portrait
      const randomIndex = Math.floor(Math.random() * characters.length);
      portraitElement.src = characters[randomIndex].image;
      return;
    }

    // Randomize the portrait during iterations
    const randomIndex = Math.floor(Math.random() * characters.length);
    portraitElement.src = characters[randomIndex].image;
    iteration++;
  }, intervalTime);
}

// Fetch portraits on page load
fetchPortraits();
