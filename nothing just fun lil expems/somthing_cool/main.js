// Matrix Background Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;  // Set the canvas to the window width
canvas.height = window.innerHeight;  // Set the canvas to the window height

const letters = '01';  // Characters used in the matrix rain
const fontSize = 10;  // Font size for the characters
const columns = canvas.width / fontSize;  // Number of columns in the matrix

const drops = [];  // Array to track the position of each drop
for (let x = 0; x < columns; x++) {
    drops[x] = 1;  // Initialize each drop's position
}

// Function to draw the matrix effect
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';  // Transparent black background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00';  // Green color for the text
    ctx.font = fontSize + 'px monospace';  // Use monospace font

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));  // Randomly pick '0' or '1'
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);  // Draw the character

        // Reset drop if it reaches the bottom of the canvas
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Function to continuously animate the matrix effect
function animateMatrix() {
    drawMatrix();
    requestAnimationFrame(animateMatrix);  // Request the next frame
}

// Login Validation Function
function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    const validUsername = 'admin';  // Correct username
    const validPassword = 'leon123';  // Correct password

    if (username.value === validUsername && password.value === validPassword) {
        errorMessage.style.display = 'none';  // Hide error message if login is correct

        // Simulate loading animation by fading out the canvas
        canvas.style.transition = 'opacity 1s';
        canvas.style.opacity = '0';

        setTimeout(() => {
            alert('Login Successful! Redirecting...');
        }, 500);
    } else {
        errorMessage.textContent = 'Incorrect username or password!';
        errorMessage.style.display = 'block';  // Show error message
    }
}

// Event Listener for login form submission
document.getElementById('loginForm').addEventListener('submit', validateLogin);

// Resize the canvas if the window size changes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start the matrix animation
animateMatrix();
