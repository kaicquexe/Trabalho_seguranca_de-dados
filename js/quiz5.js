function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        window.location.href = "formulario-fake.html"
    } else {
        button.classList.add ("wrong");
    }
}