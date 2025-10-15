document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('ctaButton');
    const formContato = document.getElementById('formContato');

    // 1. Ação para o botão CTA
    // Simula um link para o WhatsApp (substitua o número)
    ctaButton.addEventListener('click', function() {
        const numeroWhatsApp = '5511999998888'; // Substitua pelo número real do Gabriel Nazzi
        const mensagemPadrao = encodeURIComponent("Olá Gabriel Nazzi! Vi seu site e gostaria de saber mais sobre consórcios.");
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemPadrao}`;
        
        // Abre o link em uma nova aba
        window.open(urlWhatsApp, '_blank');
    });

    // 2. Simulação de envio de formulário
    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão
        
        // Coleta os dados (simplificado)
        const nome = this.querySelector('input[type="text"]').value;
        
        // Simulação de processamento
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada para Gabriel Nazzi. Ele entrará em contato em breve.`);
        
        // Limpa o formulário após o "envio"
        this.reset();
        
        // Na vida real, você usaria fetch() ou XMLHttpRequest para enviar os dados para um servidor.
    });
});