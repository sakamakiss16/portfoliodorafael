// Comentário explicativo exigido pelos critérios da atividade
document.addEventListener('DOMContentLoaded', () => {

    // Funcionalidade de alternar Tema Claro/Escuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️ Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Escuro';
        }
    });

    // Validação obrigatória do Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio incorreto da página

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        feedbackDiv.style.display = 'none';
        feedbackDiv.className = 'feedback-message';

        // Validação de campos vazios
        if (name === '' || email === '' || message === '') {
            feedbackDiv.textContent = 'Erro: Todos os campos precisam ser preenchidos!';
            feedbackDiv.classList.add('feedback-error');
            feedbackDiv.style.display = 'block';
            return;
        }

        // Validação básica de formato de e-mail
        if (!email.includes('@') || !email.includes('.')) {
            feedbackDiv.textContent = 'Erro: Por favor, insira um e-mail válido!';
            feedbackDiv.classList.add('feedback-error');
            feedbackDiv.style.display = 'block';
            return;
        }

        // Simulação de envio com sucesso
        feedbackDiv.textContent = 'Mensagem enviada com sucesso!';
        feedbackDiv.classList.add('feedback-success');
        feedbackDiv.style.display = 'block';
        
        alert('Mensagem enviada com sucesso!'); // Alerta visual exigido
        contactForm.reset(); // Limpa os campos
    });
});