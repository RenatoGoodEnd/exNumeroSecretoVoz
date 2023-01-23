function verificaSeChuteFoiValido(numero){

    if(verificaSeEhNumero(numero)){
        elementoChute.innerHTML += `<div>Não é número!</div>`
        return
    }
    if(verifcaSeNumeroEstaDentroDoPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Número deve ser entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSecreto){
        elementoChute.innerHTML += `
        <h2> Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numero}</h3>
        <buton id="jogar-novamente" class="btn-jogar">Jogar novamente</buton>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function verificaSeEhNumero(numero){
    return Number.isNaN(numero);//NaN: Not a Number, se 'numero' não for número retorna 'true' e executa o if
}

function verifcaSeNumeroEstaDentroDoPermitido(numero){
    return numero > maiorValor || numero < menorValor;//retorna 'true' para número maior que maiorValor e menor que menorValor
}

document.body.addEventListener('click', e => {
    //busca o evento clique com o id 'jogar-novamente'
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})