document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('table button');
    
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const linha = botao.closest('tr');
            const marca = linha.children[0].textContent;
            const modelo = linha.children[1].textContent;
            
            if (botao.classList.contains('btn-buy')) {
                const statusCell = linha.children[5];
                statusCell.innerHTML = '<span class="status-sold">Vendido</span>';
                
                const botoesLinha = linha.querySelectorAll('button');
                botoesLinha.forEach(function(btn) {
                    btn.disabled = true;
                    btn.style.background = '#ccc';
                    btn.style.cursor = 'not-allowed';
                });
            }
            
            alert('Carro vendido: ' + marca + ' ' + modelo);
        });
    });
});
