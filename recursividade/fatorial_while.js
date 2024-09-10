import { print, get_number } from "../utils/util.js";

function main(){
    let numero = get_number('Numero: ')

    const fatorial = obterFatorial(numero)

    print(`Fatorial de ${numero}: ${fatorial}`)
}

function obterFatorial(numero){
    let resultado = numero
    // caso base
    if (numero === 0 || numero === 1){
        return 1
    }

    while(numero > 1){
        numero-- // diminuir a cada iteracao

        resultado = resultado *= numero // ou numero *= resultado
    }
    return resultado
}

main()