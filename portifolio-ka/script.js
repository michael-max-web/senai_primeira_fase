// 1. Navegação Ativa ao Rolar a Página
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// 2. Funcionalidade do Formulário de Contato para WhatsApp
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = document.getElementById('telefone').value;

    // Coloque seu número de telefone (com código do país e DDD, ex: 5548999998888)
    const SEU_NUMERO_WHATSAPP = "5548999998888"; 
    
    // Mensagem formatada
    const textoMensagem = `Olá KA, gostaria de um orçamento para E-commerce!
*Assunto:* ${assunto}
*Nome:* ${nome}
*Email:* ${email}
*Telefone:* ${telefone ? telefone : 'Não informado'}
*Mensagem:* ${mensagem}`;

    // Codifica a mensagem para a URL
    const urlEncodedMensagem = encodeURIComponent(textoMensagem);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${SEU_NUMERO_WHATSAPP}?text=${urlEncodedMensagem}`;

    // Abre o WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Feedback opcional
    document.getElementById('feedback-contato').textContent = 'Mensagem enviada! Você será redirecionado para o WhatsApp.';
    this.reset(); // Limpa o formulário
});