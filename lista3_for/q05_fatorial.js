import {get_number, print} from '../utils/util.js'

function main(){
    const n = get_number('Digite um número: ')
    let calculo = calcular_fatorial(n)
    print(`O Fatorial de ${n}: ${calculo}`)

}

function calcular_fatorial(n){
    let fatorial = 1
    for (let i = 1; i <= n; i++) {
        fatorial *= i
    }
    return fatorial
}

main()