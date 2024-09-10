import {print, get_number} from '../utils/util.js'

function main(){
    let base = get_number('Base: ')
    let expoente = get_number('Expoente: ')

    const calcular = obterExpoente(base, expoente)

    print(calcular)
}

function obterExpoente(base, expoente){
    //caso base
    if (expoente == 0){
        return 1
    } else if(expoente < 0){ // caso base negativo
        return 1 / obterExpoente(base, -expoente)   
    } else {
        return base * obterExpoente(base, expoente - 1) //caso recursivo
    }
}

main()