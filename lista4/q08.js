import { positive_number, print } from '../utils/util.js'

function main(){
    const X = positive_number('Digite um número: ')

    const soma = verificar_soma(X)
    print(`A soma ${soma} é igual ao número X`)
}

function verificar_soma(X){
    let numero1 = positive_number('Digite um número da lista: ')
    let numero2 = positive_number('Digite um número da lista: ')

    while(numero1 + numero2 !== X){
        numero1 = numero2
        numero2 = positive_number('Digite um número da lista:  ')
    }
    return numero1 + numero2
}
main()