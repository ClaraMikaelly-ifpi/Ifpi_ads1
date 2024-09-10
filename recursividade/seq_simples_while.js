import { print, get_number } from "../utils/util.js";

function main(){
    let A = get_number('Limite Inicial: ')
    let B = get_number('Limite Final: ')

    const sequencia = obterSequencia(A, B)

    print(sequencia)
}

function obterSequencia(A, B){
    while (A <= B){
        print(A)
        A++
    }
}

main()