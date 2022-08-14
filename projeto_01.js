/*
    Escreva uma função que recebe um número qualquer de números
    inteiros como argumentos e retorne a média aritmética entre eles. 
*/



//Função

/*
function media(numbers) {

    let soma = 0;

    numbers.forEach(number => {
        
        soma += number; // soma = soma + number >>> Incremento

    });

    const media = soma / numbers.length; // variavel média recebe a soma de valores no array / número de indice

    return media;

}
*/

// Fatorando com reduce

/*
function media(numbers) {
    const soma = numbers.reduce((acumulado, numero) => { // reduce recebe uma função de callback vindo de todos os elementos do array e vai acumulando
                                    // reduce(parametros) => {}
        return acumulado + numero; // retorna o valor acumulado
        
    }, 0) // ) tem a função de vaslor inicial ao acumulado

    return soma / numbers.length; // retorna para media
}
*/

//Abreviando o codigo

/*
function media(numbers) {
    const soma = numbers.reduce((acumulado, numero) => acumulado + numero, 0)
    return soma / numbers.length; // retorna para media
}
*/

//Desestruturando o Array, quando somente numeros é passado.

function media(...numbers) { // (...) indica desestruturação do array 
    const soma = numbers.reduce((acumulado, numero) => acumulado + numero, 0)
    return soma / numbers.length; // retorna para media
}

//Teste da função com numeros ... em uma chamada desestruturada.

console.log(media(10, 9, 6, 8, 9, 1, 5, 7)) //6.875
console.log(media(2, 5, 7, 1, -2)) // 2.6

/*
//Teste da função com Array.
console.log(media([10, 9, 6, 8, 9, 1, 5, 7])) //6.875
console.log(media([2, 5, 7, 1, -2])) // 2.6
console.log(media([10, 10, 10, 10, 9])) // 9.8
console.log(media([25, 75])) //50
*/