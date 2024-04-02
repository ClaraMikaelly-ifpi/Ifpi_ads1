import { positive_number, print } from '../utils/util.js'

function main(){
    const X = positive_number('Digite um número:  ')
    const N = positive_number('Digite um número:  ')

    const resultado = divisao(X, N)
    print(`O resultado das divisões é: ${resultado.toFixed(2)}`)
}

function divisao(X, N){
    while (N >= 2){
        X /= N
        N--
    }
    return X
}

main()