document.addEventListener('DOMContentLoaded', function () {
    // Recupera os valores do localStorage
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const cpf = localStorage.getItem('cpf');
    const endereco = localStorage.getItem('endereco');
    const dataNascimento = localStorage.getItem('dataNascimento');

    // Exibe os valores nos elementos correspondentes
    document.getElementById('resNome').textContent = nome;
    document.getElementById('resEmail').textContent = email;
    document.getElementById('resCpf').textContent = cpf;
    document.getElementById('resEndereco').textContent = endereco;
    document.getElementById('resDataNascimento').textContent = dataNascimento;
});