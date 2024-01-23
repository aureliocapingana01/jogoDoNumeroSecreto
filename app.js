let listaDeNumeroSorteado = []
let limiteDaLista = 100
let = numeroSecreto = numeroAleatorio() 
let tentativas = 1


/* Funcao com parametro, para exibir os texto */
/* Fução com parametro */
const exibirTexto = (tag, texto) => {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMsgInicial() {
    exibirTexto('h1', 'Bem vindo ao Jogo do Numero Secreto')
    exibirTexto('p', 'Escolha um número entre 1 á 100')
}

exibirMsgInicial()

/* Fução sem retorno */
function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Parabéns')
        let msgTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

        let mensagemTentativas = `você descubriu o número secreto, com ${tentativas} ${msgTentativa}`
        exibirTexto('p', mensagemTentativas)

        document.querySelector('#reiniciar').removeAttribute('disabled')
    }
    else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'errou, o número secreto é menor')
        }
        else {
            exibirTexto('p', 'errou,  número secreto é maior')
        }
        tentativas++

        limparCampo()
    }
}

/* Fução com retorno */
function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteDaLista + 1)
   let qtdList = listaDeNumeroSorteado.length

   if (qtdList == limiteDaLista) {
    listaDeNumeroSorteado = []
   }

   if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
    return numeroAleatorio();
   }
   else {
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
   }
}

/*Funcao para limpar o campo */
const limparCampo = () => {
    chute = document.querySelector('input')
    chute.value = ''
}

/* Funcao para reiniciar o jogo assim que acerta */
const reiniciarJogo = () => {
    numeroSecreto = numeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMsgInicial()
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}