let targetNumber;
let attempts = 0;
let lastGuess = null;
const startButton = document.getElementById('startGame')
const container = document.getElementById('container')
const start = document.getElementById('start')
const end = document.getElementById('end')
const paragraph = document.getElementById('paragrath')
const startContainer = document.getElementById('start-container')
const feedback = document.getElementById('feedback');

startButton.onclick = () => {
    const startValue = parseInt(start.value);
    const endValue = parseInt(end.value);

    if (startValue >= endValue) {
        paragraph.textContent = 'Please enter valid numbers where the start is less than the end.';
        return;
    }


    const range = Math.abs(endValue - startValue);


    targetNumber = Math.floor(Math.random() * (range + 1)) + startValue;

    container.classList.add('starts');
    paragraph.textContent = `Try to guess the number between ${startValue} and ${endValue}.`;
    startContainer.classList.add('hide')
};

document.getElementById('guessBtn').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    const attemptsDisplay = document.getElementById('attempts');

    attempts++;
    let difference = Math.abs(userGuess - targetNumber);

    if (userGuess === targetNumber) {
        feedback.textContent = `🎉 Correct! You guessed the number in ${attempts} attempts.`;
        document.getElementById('guessBtn').disabled = true;
        document.getElementById('restartBtn').style.display = 'inline';
    } else {
        if (difference <= 5) {
            feedback.textContent = "🔥 You're very close!";
        } else if (difference <= 15) {
            feedback.textContent = "😊 You're close!";
        } else if (difference <= 30) {
            feedback.textContent = "😐 You're far!";
        } else {
            feedback.textContent = "❄️ You're way off!";
        }

        if (lastGuess !== null) {
            const lastDifference = Math.abs(lastGuess - targetNumber);
            if (difference < lastDifference) {
                feedback.textContent += " (You're getting closer!)";
            } else {
                feedback.textContent += " (You're moving further away!)";
            }
        }

        lastGuess = userGuess;
       
    }
     attemptsDisplay.textContent = `Attempts: ${attempts}`;
});

document.getElementById('restartBtn').addEventListener('click', () => {
    window.location.reload();
});





