function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        window.location.href = "quiz-5.html"
    } else {
        button.classList.add ("wrong");
    }
}