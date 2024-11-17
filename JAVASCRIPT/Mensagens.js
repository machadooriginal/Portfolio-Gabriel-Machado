document.addEventListener('DOMContentLoaded', function() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesList = document.getElementById('messagesList');

    if (messages.length === 0) {
        messagesList.innerHTML = '<p>Nenhuma mensagem encontrada.</p>';
        return;
    }

    messages.forEach(function(message, index) {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `
            <h3>${message.name} (${message.email})</h3>
            <p>${message.message}</p>
            <button class="removeMessage" data-index="${index}">Remover</button>
            <hr>
        `;
        messagesList.appendChild(messageDiv);
    });

    document.querySelectorAll('.removeMessage').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            messages.splice(index, 1); 
            localStorage.setItem('messages', JSON.stringify(messages)); 
            location.reload(); 
        });
    });

    document.getElementById('removeAll').addEventListener('click', function() {
        localStorage.removeItem('messages'); 
        location.reload(); 
    });
});