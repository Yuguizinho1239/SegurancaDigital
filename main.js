// =======================================================
// VARIÁVEIS E CONSTANTES ORGANIZADAS NO TOPO DO ARQUIVO
// =======================================================
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

// =======================================================
// CONFIGURAÇÃO DOS EVENTOS DE CLIQUE
// =======================================================
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

// =======================================================
// FUNÇÕES DO PROJETO
// =======================================================

function geraSenha() {
    let alfabeto = '';
    
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = algebra = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    
    campoSenha.value = senha;
    
    // ATUALIZADO: Passando o tamanho do alfabeto gerado como argumento da função
    classificaSenha(alfabeto.length);
}

// FUNÇÃO ATUALIZADA CONFORME AS INSTRUÇÕES DA AULA DE ENTROPIA
function classificaSenha(tamanhoAlfabeto) {
    // Cálculo da Entropia matemática
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    
    // Remove as classes antigas acumuladas para limpar o elemento
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    
    // ATUALIZADO: Regras condicionais baseadas nos valores de bits de entropia
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }

    // EXIBIÇÃO DO CÁLCULO: Seleciona a tag do HTML e exibe a estimativa formatada em dias
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = 2 ** Math.floor(entropia) / (100e6 * 60 * 60 * 24);
}

// CHAMADA INICIAL: Gera a primeira senha e define a força ao carregar a página
geraSenha();

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
