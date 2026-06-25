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
        // CORRIGIDO: Removido o termo incorreto "algebra =" que quebrava o script
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
    
    // Passando o tamanho do alfabeto gerado como argumento da função
    classificaSenha(alfabeto.length);
}

// FUNÇÃO ATUALIZADA CONFORME A NOVA AULA
function classificaSenha(tamanhoAlfabeto) {
    // Cálculo da Entropia matemática
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    
    // Remove as classes antigas acumuladas para limpar o elemento
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    
    // Regras condicionais baseadas nos valores de bits de entropia
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }

    const valorEntropia = document.querySelector('.entropia');
    
    // ATUALIZADO: Operação matemática inteira dentro do Math.floor e textos concatenados com o operador +
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
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
