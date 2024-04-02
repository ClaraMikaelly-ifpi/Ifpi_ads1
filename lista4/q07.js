import { positive_number, print } from '../utils/util.js'

function main(){
    const numero = positive_number('Digite um número:  ')
    const numero_igual = ter_igual(numero)
    print(`O núero ${numero_igual} é igual ao primeiro`) 


}

function ter_igual(numero){
    let N = positive_number('Digite um número da lista: ')
    while (N !== numero) {
        N = positive_number('Digite um número da lista: ')
    }
    return N
}

main()