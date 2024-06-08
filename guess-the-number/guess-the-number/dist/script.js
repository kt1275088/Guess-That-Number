// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (guess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the correct number (${randomNumber})!`;
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }
}