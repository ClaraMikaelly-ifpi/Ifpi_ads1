import { print, get_number } from "../utils/util.js";

function main(){
    let base = get_number('Base: ')
    let expoente = get_number('Expoente: ')

    const resultado = obterExpoente(base, expoente)

    print(resultado)
}

function obterExpoente(base, expoente){
    for (let i = base; i <= base; i++){
        return i ** expoente
    }
}

main()