import { print, get_number } from "../utils/util.js";

function main(){
    let n = get_number('Numero: ')

    const sequencia = obterSequenciaFib(n)

    print(sequencia)
}

function obterSequenciaFib(n){
    if (n <= 1){
        return n
    } else {
        return obterSequenciaFib (n - 1) + obterSequenciaFib(n - 2)
    }
}
main()
