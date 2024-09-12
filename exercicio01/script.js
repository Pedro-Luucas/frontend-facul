
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.querySelector('.chat-form');
    const chatBox = document.querySelector('.chat-box');
    const messageInput = chatForm.querySelector('input[type="text"]');
    
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        const messageText = messageInput.value.trim();
        if (messageText === '') return; // Não faz nada se a mensagem estiver vazia

        // Cria o elemento de mensagem enviada
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.innerHTML = `<p>${messageText}</p>`;
        
        // Adiciona a mensagem ao chat
        chatBox.appendChild(messageDiv);
        
        // Limpa o campo de entrada
        messageInput.value = '';
        
        // Faz rolar automaticamente para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    });
});
