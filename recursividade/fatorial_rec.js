import { print, get_number } from "../utils/util.js";

function main(){
    let n = get_number('Numero: ')

    const fatorial = obterFatorial(n)

    print(fatorial)
}

function obterFatorial(n){
    if (n == 0){    //caso base
        return 1;
    } else {        // caso indutivo
        return (n * obterFatorial (n - 1));
    }
}

main()