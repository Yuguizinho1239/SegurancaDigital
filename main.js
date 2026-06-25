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

// CONSTANTE ADICIONADA NESSA AULA PARA GERENCIAR A BARRA DE FORÇA
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
        alfabeto = alfabeto + numeros;
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
    
    // CHAMADA DA FUNÇÃO ADICIONADA NO FINAL
    classificaSenha();
}

// NOVA FUNÇÃO CRIADA E ESTRUTURADA NESSA AULA
function classificaSenha() {
    // Remove as classes antigas acumuladas para limpar o elemento
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    
    // Regras condicionais baseadas no tamanhoSenha
    if (tamanhoSenha > 11) {
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5) {
        forcaSenha.classList.add('fraca');
    }
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
