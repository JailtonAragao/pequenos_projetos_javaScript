/*
Recursão é quando uma função chama ela mesma até chegar em um caso base 
simples que desencadeia a resolução do problema. 
Recursão é um conceito muito importante e comum na computação, 
ela permite que problemas grandes e complexos sejam quebrados 
em tarefas mais simples e claras.
*/

// PRojeto_02

/**
 * Escreva uma função que recebe um número que retorna uma
 * quantidade equivalente de pedaço separados por um traço "-"
 * sem usar nenhuma estrutura de repetição.
 * 
 */

//Função

function chunks(num){ // função chunks mais (num) parametro
    //caso receba 0 ou String vazia não retorna nada.
    if (num === 0){
        return '';
    }

    //caso receba 1
    if (num === 1){
        return 'chunks'
    }else{ //caso receba mais de 1 como ja existe um chunks,add -1 no parametro e chunks"-".
        return 'chunks-' + chunks(num -1)
    }

}

// Refatorando


// Teste da Função

console.log(chunks(4));
console.log(chunks(1));
console.log(chunks(8));
console.log(chunks(2));


