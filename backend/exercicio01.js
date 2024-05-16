//Poder de cada objeto
let jogador1 = 'pedra';
let jogador2 = 'tesoura';

/*
if(jogador1 > jogador2)
{
    console.log('Jogador n°1 Ganhou!')
}
else{
    if (jogador1 == jogador2){
        console.log('Empate!')
    } 
    else{
        console.log('Jogador n°2 Ganhou!')
    }   
}
*/

if (jogador1 == 'pedra' && jogador2 == 'pedra') {
    console.log('Empate')
}
else {
    if (jogador1 == 'papel' && jogador2 == 'pedra') {
        console.log('Jogador 1 Ganhou')
    }
    else {
        if (jogador1 == 'pedra' && jogador2 == 'tesoura') {
            console.log('Jogador 1 Ganhou')
        }
    }
}
