/**
 *  A separação dos algarismos de um número. Uma das formas que podemos usar 
 * para alcançar isso é converter o número para outros tipos mais fáceis de 
 * manipular individualmente, como strings, por exemplo.
 * Podemos converter o número para string, dessa forma podemos utilizar 
 * uma estrutura de repetição para iterar sobre a string elevando cada 
 * caractere ao quadrado individualmente e concatenando o resultado em uma string. 
 * No fim retornamos essa string convertida de volta para número
 */

// Projeto_04

/**
 * Escreva uma função que recebe um núm,ero inteiro qualquer, ele ao quadrado
 * cada um de seus algarismo e depois concatene o resultado retornando um unico 
 * número inteiro.
 */

// Função 
/*
function quadrado(numero) {
    const string = numero.toString() // Convertendo numero em String
    let resultado = "" // Recebe uma string vazia, para acresentar o resultado de pow.

    for (let i = 0; i < string.length; i++) {
        resultado += Math.pow(Number(string[i]), 2).toString() // A string[i] foi convertida em Number
    
    }
    
    return Number(resultado) // Sendo convertido em numero novamente.
}
*/

// Fatorando com split('') e map('')

function square(num){

    const digitoArray = num.toString().split('') //
    const quadradoArray = digitoArray.map(digito => Number(digito) ** 2).join('') //

    return Number(quadradoArray)
}

// Teste da função convert String X Number

console.log(square(3514)); 
console.log(square(94571));
console.log(square(24)); 
console.log(square(3514)); 