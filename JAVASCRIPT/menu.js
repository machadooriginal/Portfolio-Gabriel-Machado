let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
     menu.classList.remove('abrir-menu')
})

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Remove a classe "active" de todos os links
    links.forEach(link => link.classList.remove('active'));

    // Adiciona a classe "active" ao link clicado
    e.target.classList.add('active');
  });
});

// menu mobile //

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const contactMessage = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const messages = JSON.parse(localStorage.getItem('messages')) || [];


    messages.push(contactMessage);

    localStorage.setItem('messages', JSON.stringify(messages));


    document.getElementById('contactForm').reset();
    alert('Mensagem enviada com sucesso!');
});

// Slavar mensagens de contato //




        
