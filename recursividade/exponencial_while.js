import { print, get_number } from "../utils/util.js";


function main(){
    let base = get_number('Base: ')
    let expoente = get_number('Expoente: ')

    const resultado = obterExponencial(base, expoente)

    print(resultado)
}
 
function obterExponencial(base, expoente){
    while(base > 0){
        return base ** expoente
    }
}
main()