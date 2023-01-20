const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
    //Match.random() é um gerador de números aleatórios de 0 a 0.99... Multiplicando chega-se a qualquer número inteiro
    //o +1 é para contar no exemplo de 1 a 1000, do contrário contaria de 0 a 999
    //parseInt transforma em número inteiro
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')//busca o elemento com esse id
elementoMenorValor.innerHTML = menorValor //substitui seu valor dentro do html

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor