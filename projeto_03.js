/**
 * Usando uma estrutura de repetição basica para iterar sobre uma cópia
 * do array original, evitando que seja modificado.
 * Criar uma nova variável e armazenar um array invertid ousando "for" 
 * refereciando o tamanho do Array.
 */

// Projeto_03

/**
 * Escreva uma função que recebe um array e retorne um novo com suas 
 * posições invertida do original sem alterá-lo'
 */

// Função

function arrayInvertido(array) {
    const arrayCopia = [] // Array vazio para arzenar a copia.

    for (let i = 0; i < array.length; i++) [ // usuando com i = 0, com i pecorrendo o array parando quando ficar menor que o comprimento, endrementado apartir de zero.

        arrayCopia[i] = array[array.length - 1 -i] //arrayCopia recebe do array.length - 1 - i os arrays invertido.

    ]

    return arrayCopia
}



// Teste da função arrayInvertido

console.log(arrayInvertido([10, 9, 6, 8, 9, 1, 5, 7]));
console.log(arrayInvertido(["Oh", "OI", "Olá"]));
console.log(arrayInvertido([false, true, true, true]));
console.log(arrayInvertido(["Eu", "Tu", true, 0]));
