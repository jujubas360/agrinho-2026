/* ============================================
   INTERATIVIDADE & COMPORTAMENTO DINÂMICO
============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Controle do Cabeçalho ao Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Event Listener do Botão de Simulação da Eco-Calculadora
    const btnCalcular = document.getElementById('btn-calcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularEcoImpacto);
    }

    // 3. Efeitos nos botões auxiliares
    document.getElementById('btn-entrar')?.addEventListener('click', () => alert('Conectando ao banco de dados da fazenda sustentável...'));
    document.getElementById('btn-baixar')?.addEventListener('click', () => alert('Abrindo guia de boas práticas agroecológicas da edição Agrinho 2026.'));

    // 4. Inicializar o Quiz do Agronegócio
    inicializarAgroQuiz();
});

/* LÓGICA DA ECO-CALCULADORA DO AGRONEGÓCIO */
function calcularEcoImpacto() {
    const inputValor = document.getElementById('valorImpacto');
    const resultadoDiv = document.getElementById('resultado');
    
    if (!inputValor || !resultadoDiv) return;

    const hectares = inputValor.value.trim();

    if (hectares !== '' && !isNaN(hectares) && parseFloat(hectares) > 0) {
        // Simulação matemática fictícia sobre créditos de carbono evitados por hectare sustentável
        const co2Evitado = (parseFloat(hectares) * 2.5).toFixed(1);
        const ecoPontos = Math.floor(hectares * 15);
        
        resultadoDiv.innerHTML = `
            > ACESSANDO DADOS DO SATÉLITE...<br>
            > MAPEAMENTO DE ÁREA CONCLUÍDO!<br><br>
            > RESULTADOS ESTIMADOS:<br>
            * Emissões de CO₂ evitadas: ${co2Evitado} toneladas por ano!<br>
            * Pontuação Eco-XP acumulada: ${ecoPontos} MegaFlops Digitais! 🌿
        `;
    } else {
        resultadoDiv.innerHTML = `> ERRO: INSIRA UMA QUANTIDADE VÁLIDA DE HECTARES (MAIOR QUE ZERO)!`;
    }
}

/* LÓGICA DO QUIZ DO AGRONEGÓCIO SUSTENTÁVEL */
const perguntasAgro = [
    {
        pergunta: "Qual dessas práticas ajuda diretamente a manter o solo protegido contra a erosão?",
        opcoes: ["Queimar os restos vegetais antigos", "Plantio Direto sobre a palha", "Revolver a terra constantemente"],
        correta: 1
    },
    {
        pergunta: "Qual o principal benefício do uso de Drones no agronegócio sustentável?",
        opcoes: ["Substituir completamente o trabalho humano", "Identificar focos de pragas e economizar defensivos", "Acelerar a velocidade de crescimento dos grãos"],
        correta: 1
    },
    {
        pergunta: "A rotação de culturas serve principalmente para qual finalidade no campo?",
        opcoes: ["Evitar que os nutrientes do solo se esgotem", "Mudar as cores da plantação para fotos de satélite", "Diminuir o tamanho das propriedades rurais"],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function inicializarAgroQuiz() {
    const txtPergunta = document.getElementById('quiz-pergunta');
    const containerOpcoes = document.getElementById('quiz-opcoes');
    const containerQuiz = document.getElementById('quiz-container');
    const divResultado = document.getElementById('quiz-resultado');

    if (!txtPergunta || !containerOpcoes) return;

    if (perguntaAtual < perguntasAgro.length) {
        const dadosOpcao = perguntasAgro[perguntaAtual];
        txtPergunta.innerText = `[PERGUNTA ${perguntaAtual + 1}/${perguntasAgro.length}]: ${dadosOpcao.pergunta}`;
        containerOpcoes.innerHTML = '';

        dadosOpcao.opcoes.forEach((opcao, index) => {
            const btnOpcao = document.createElement('button');
            btnOpcao.innerText = opcao;
            btnOpcao.style.width = "100%";
            btnOpcao.style.textTransform = "none";
            btnOpcao.style.margin = "2px 0";
            btnOpcao.addEventListener('click', () => verificarAgroResposta(index));
            containerOpcoes.appendChild(btnOpcao);
        });
    } else {
        containerQuiz.style.display = 'none';
        divResultado.style.display = 'block';
        
        let perfilJogador = "";
        if (pontuacao === perguntasAgro.length) {
            perfilJogador = "MESTRE EM AGROECOLOGIA DIGITAL! 🟢";
        } else if (pontuacao >= 1) {
            perfilJogador = "PRODUTOR CONSCIENTE EM EVOLUÇÃO! 🔵";
        } else {
            perfilJogador = "INTERNAUTA INICIANTE DO CAMPO! 🟡";
        }

        divResultado.innerHTML = `
            > DESAFIO ECO-SABER FINALIZADO!<br>
            > SEUS ACERTOS: ${pontuacao}/${perguntasAgro.length}.<br><br>
            > CLASSIFICAÇÃO: ${perfilJogador}
        `;
    }
}

function verificarAgroResposta(indiceSelecionado) {
    if (indiceSelecionado === perguntasAgro[perguntaAtual].correta) {
        pontuacao++;
        alert('🌐 Excelente! Prática altamente sustentável identificada. +100 Eco-XP');
    } else {
        alert('❌ Essa ação pode prejudicar o ecossistema local. Continue estudando os pilares verdes!');
    }
    perguntaAtual++;
    inicializarAgroQuiz();
}
