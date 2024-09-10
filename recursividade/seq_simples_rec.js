import { print, get_number } from "../utils/util.js";

function main(){
    let A = get_number('Limite inicial: ')
    let B = get_number('Limite final: ')

    const sequencia = obterSequencia(A, B)

    print(sequencia)
}

function obterSequencia(A, B){
    if (A <= B){
        print(A)
        obterSequencia(A + 1, B)
    }
}
main()