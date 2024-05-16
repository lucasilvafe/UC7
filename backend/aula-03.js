//const nomes = ['Joao', 'Jose', 'Maria']

// console.log(nomes[2]);

// for (const nome of nomes) {
//     console.log(nome)
// }

// console.log(nomes.length);

/*
//Adiciona o item na ultima posição o array
nomes.push('Lucas')

//Remove o primeiro elemento do array 
nomes.shift()

//Remove o ultimo elemento do array
nomes.pop()

nomes.push('Manel')

nomes.pop()

//Adiciona um elemento na primeira posição do array
nomes.unshift('Manel')

console.log(nomes)
*/

// const resultado = nomes.find((nome) => {
//     return nome === 'Jose'
// })
// console.log(resultado);

const usuarios = [
    {nome: 'joao', idade:23},
    {nome: 'Maria', idade:27},
    {nome: 'jose', idade:30}
]

const resultado = usuarios.find((usuario)=>{
    return usuario.idade == 30
})
console.log(resultado);
