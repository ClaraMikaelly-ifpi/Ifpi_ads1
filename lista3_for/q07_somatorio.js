import { get_number, print } from '../utils/util.js'

function main(){
    let N = get_number('Digite um número: ')
    let soma = calcular_soma(N)
    print(`Resultado da soma: ${soma}`)
}

function calcular_soma(N){
    let soma_N = 0
    for (let i = 1; i <= N; i++) {
        soma_N += i
    }
    return soma_N
}

main()