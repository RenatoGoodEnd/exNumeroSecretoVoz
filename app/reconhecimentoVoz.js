const elementoChute = document.getElementById('chute')//busca a div que mostra o valor do chute

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript // salva o valor do chute registrado na variável chute
    exibeChuteNaTela(chute)
    verificaSeChuteFoiValido(chute)

    console.log(e.results[0][0].transcript)
    //o primeiro array pega a taxa de confiabilidade, o segundo o que foi dito
    //usando o .transcript consegue isolar a informação captada pelo microfone
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">?${chute}</span>
    `
    //reescreve a div dentro da div chute para mostrar o valor do chute apenas quando registrado.
    //enquanto não registrado um número ditado a div fica oculta

}

recognition.addEventListener('end', () => recognition.star())//reinicia a escuta após o término da instrução
    