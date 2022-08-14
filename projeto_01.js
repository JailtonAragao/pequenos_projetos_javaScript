/*
    Escreva uma função que recebe um número qualquer de números
    inteiros como argumentos e retorne a média aritmética entre eles. 
*/

//Função

function media(numbers) {

    let soma = 0;

    numbers.forEach(number => {
        
        soma += number; // soma = soma + number >>> Incremento

    });

    const media = soma / numbers.length; // variavel média recebe a soma de valores no array / número de indice

    return media;

}


//Teste da função.
console.log(media([10, 9, 6, 8, 9, 1, 5, 7])) //6.875
console.log(media([2, 5, 7, 1, -2])) // 2.6
console.log(media([10, 10, 10, 10, 9])) // 9.8
console.log(media([25, 75])) //50