const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const campoSenha = document.querySelector('#campo-senha');

// CONSTANTES ATUALIZADAS NESSA AULA
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

// SELECIONANDO OS CHECKBOXES DO HTML
const checkbox = document.querySelectorAll('.checkbox');

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// LAÇO FOR ADICIONADO: Faz a senha atualizar ao clicar em qualquer caixa de seleção
for (let i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = geraSenha;
}

// FUNÇÃO ATUALIZADA CONFORME A AULA
function geraSenha(){
    let alfabeto = '';
    
    // Verificações se cada checkbox está marcado (checked) para montar o alfabeto
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }

    let senha = '';
    
    // Laço for alterado para usar a variável 'alfabeto' dinamicamente
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}

// CHAMADA INICIAL: Gera a primeira senha ao carregar a página
geraSenha();

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha(); 
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha(); 
}
