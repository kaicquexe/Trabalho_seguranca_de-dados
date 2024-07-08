function finalizar() {
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    // Verifica se todos os campos estão preenchidos
    if (nome && email && cpf && endereco && dataNascimento) {
        // Armazena os valores no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('cpf', cpf);
        localStorage.setItem('endereco', endereco);
        localStorage.setItem('dataNascimento', dataNascimento);

        // Redireciona para a página de resultados
        window.location.href = 'resultado.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}