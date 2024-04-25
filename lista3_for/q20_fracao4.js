import { get_number, positive_number, print } from '../utils/util.js'

function main(){
    let numero = positive_number('Digite um numero(maior ou igual à 1): ')

    let S = calcular_S(numero)

    print('-------------------')
    print(`O valor de S é igual: ${S.toFixed(1)}`)

}

function calcular_S(numero){
    let S = 0
    for (let i = 0; i <= numero; i++) {
        if(i % 2 > 0){
            S += (1 / i)
        } else {
            S -+ (1 / i)
        }
    }
    return S
}

main()