function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        window.location.href = "quiz-3.html"
    } else {
        button.classList.add ("wrong");
    }
}