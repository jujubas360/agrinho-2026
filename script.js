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

    // 2. Event Listener da Calculadora
    const btnCalcular = document.getElementById('btn-calcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularImpacto);
    }

    // 3. Fake Alerts dos Botões Estilo Anos 2000
    document.getElementById('btn-entrar')?.addEventListener('click', () => alert('Aba de Login em manutenção! Conexão Discada instável.'));
    document.getElementById('btn-baixar')?.addEventListener('click', () => alert('Direcionando para a central de downloads Frutiger Aero...'));

    // 4. Inicializar o Quiz
    inicializarQuiz();
});

/* LÓGICA DA CALCULADORA */
function calcularImpacto() {
    const inputValor = document.getElementById('valorImpacto');
    const resultadoDiv = document.getElementById('resultado');
    
    if (!inputValor || !resultadoDiv) return;

    const valor = inputValor.value.trim();

    if (valor !== '' && !isNaN(valor) && parseFloat(valor) > 0) {
        const resultadoCalculado = (parseFloat(valor) * 8.4).toFixed(2);
        resultadoDiv.innerHTML = `> CALCULANDO BIO-EFICIÊNCIA...<br>> PROCESSO CONCLUÍDO!<br>> SEU IMPACTO GEROU: ${resultadoCalculado} MegaFlops de Eco-XP! 🌐`;
    } else {
        resultadoDiv.innerHTML = `> ERRO: INSIRA UM NÚMERO MAIOR QUE ZERO!`;
    }
}

/* LÓGICA DO QUIZ INTERATIVO */
const perguntasQuiz = [
    {
        pergunta: "Qual tecnologia ajuda a economizar água na irrigação agrícola?",
        opcoes: ["Sensores de umidade no solo", "Monitores CRT antigos", "CD-ROMs graváveis"],
        correta: 0
    },
    {
        pergunta: "Como os drones auxiliam o pequeno produtor sustentável?",
        opcoes: ["Tocando músicas MP3", "Mapeando pragas com precisão", "Aumentando a velocidade da internet"],
        correta: 1
    },
    {
        pergunta: "O que caracteriza a estética Frutiger Aero e a tecnologia verde?",
        opcoes: ["Telas pretas e escuras", "Elementos de vidro, água, plantas e otimismo digital", "Minimalismo cinza e sem cores"],
        correta: 1
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function inicializarQuiz() {
    const txtPergunta = document.getElementById('quiz-pergunta');
    const containerOpcoes = document.getElementById('quiz-opcoes');
    const containerQuiz = document.getElementById('quiz-container');
    const divResultado = document.getElementById('quiz-resultado');

    if (!txtPergunta || !containerOpcoes) return;

    if (perguntaAtual < perguntasQuiz.length) {
        const dadosOpcao = perguntasQuiz[perguntaAtual];
        txtPergunta.innerText = `[PERGUNTA ${perguntaAtual + 1}/${perguntasQuiz.length}]: ${dadosOpcao.pergunta}`;
        containerOpcoes.innerHTML = '';

        dadosOpcao.opcoes.forEach((opcao, index) => {
            const btnOpcao = document.createElement('button');
            btnOpcao.innerText = opcao;
            btnOpcao.style.width = "100%";
            btnOpcao.style.textTransform = "none";
            btnOpcao.style.margin = "2px 0";
            btnOpcao.addEventListener('click', () => verificarResposta(index));
            containerOpcoes.appendChild(btnOpcao);
        });
    } else {
        containerQuiz.style.display = 'none';
        divResultado.style.display = 'block';
        divResultado.innerHTML = `> QUIZ COMPLETADO!<br>> SUA PONTUAÇÃO: ${pontuacao}/${perguntasQuiz.length} ACERTOS.<br>> NÍVEL: ${pontuacao === perguntasQuiz.length ? 'CYBER-PRODUTOR SUPREMO 🟢' : 'INTERNAUTA APRENDIZ 🔵'}`;
    }
}

function verificarResposta(indiceSelecionado) {
    if (indiceSelecionado === perguntasQuiz[perguntaAtual].correta) {
        pontuacao++;
        alert('🌐 Resposta Correta! +100 XP');
    } else {
        alert('❌ Resposta Incorreta! Tente se conectar melhor na próxima.');
    }
    perguntaAtual++;
    inicializarQuiz();
}
