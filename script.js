/* JAVASCRIPT - INTERAÇÃO COM O SITE/PORTIFÓLIO */

// Aguarda o conteúdo da página carregar antes de executar as funções
document.addEventListener('DOMContentLoaded', () => {
    
    // Configura as regras de validação do formulário de contato
    configurarFormulario();
    
    // Configura o botão de trocar o tema (Claro/Escuro)
    configurarTrocaTema();
});

/**
 * Função responsável por validar os campos e simular o envio do formulário de contato
 */
function configurarFormulario() {
    const formulario = document.getElementById('form-contato');
    
    if (!formulario) return;

    formulario.addEventListener('submit', (evento) => {
        // Impede a página de recarregar antes de fazermos a validação
        evento.preventDefault();
        
        // Captura o que foi digitado nos campos tirando espaços extras
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        // 1. Validação Obrigatória: Verifica se algum campo ficou vazio
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos (Nome, E-mail e Mensagem) antes de enviar.');
            return;
        }
        
        // 2. Validação do Formato do E-mail: Verifica se possui @ e um domínio válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).');
            return;
        }
        
        // 3. Simulação de Envio com Sucesso: Exibe o alerta e limpa a tela
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso!`);
        formulario.reset(); // Limpa todos os campos do formulário automaticamente
    });
}

/**
 * Funcionalidade de Interação: Cria o botão no menu para alternar o tema do site
 */
function configurarTrocaTema() {
    // Seleciona o container do menu que criamos no HTML
    const menuContainer = document.querySelector('.menu-container');
    if (!menuContainer) return;

    // Cria um elemento de botão dinamicamente via JavaScript
    const botaoTema = document.createElement('button');
    botaoTema.innerText = '🌓 Tema';
    botaoTema.classList.add('btn-tema'); // Adiciona a classe que estilizamos no CSS
    
    // Insere o botão de tema logo após a lista de links do menu
    menuContainer.appendChild(botaoTema);
    
    // Adiciona o evento de clique para ligar/desligar a classe 'dark-theme' no body
    botaoTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}