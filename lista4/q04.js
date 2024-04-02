import { positive_number, print } from '../utils/util.js'

function main(){
    let numero = positive_number('Digite um número:  ')

    while(numero >= 1){
        let resultado = divisao_2(numero)
        numero = resultado
    }
    print(`O resultado da última divisão realizada é: ${numero}.`)
}

function divisao_2(numero){
    return numero/2
}

main()