function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        window.location.href = "quiz-2.html"
    } else {
        button.classList.add ("wrong");
    }
}