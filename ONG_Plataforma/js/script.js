// Exemplo simples de validação extra no envio do formulário
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastroForm");
    
    form.addEventListener("submit", function(event) {
        alert("Cadastro enviado com sucesso!");
        event.preventDefault(); // evita envio real (simulação)
    });
});
