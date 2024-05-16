const abrirMensagem = document.getElementById('botao-abrir-mensagem');
abrirMensagem.addEventListener('click', function(){
    alert('TOOOMI!')
})

const inputDados = document.getElementById('input-dados');
inputDados.addEventListener('keydown', function(letra){
    console.log(`Tecla precionada ${letra.key}`)
})

const title = document.getElementById('title');
const buttonChangeTitle = document.getElementById('change-title-text');

buttonChangeTitle.addEventListener('click', function(){
    title.innerHTML = `<h5>Eita bixo!</h5>`
})

const changeImage = document.getElementById('img01');
changeImage.addEventListener('click', function(){
    changeImage.setAttribute('src', './imagens/img-02.jpg')
})



const playStop = document.getElementById('play-stop');
const textoOriginal = playStop.textContent;
playStop.addEventListener('click', function(){
    if(playStop.textContent != "Stop"){
        playStop.textContent = "Stop"
    }
    else {
        playStop.textContent = textoOriginal
    }
})

const btnDarkMode = document.getElementById('dark')

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})


const btnDarkMode2 = document.getElementById('dark2')

btnDarkMode2.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
