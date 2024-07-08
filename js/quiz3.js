function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        window.location.href = "quiz-4.html"
    } else {
        button.classList.add ("wrong");
    }
}