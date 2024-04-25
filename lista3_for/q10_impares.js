import { get_number, print } from '../utils/util.js'

function main(){

    let limite_inferior = get_number('Ecreva o limite inferior: ')
    let limite_superior = get_number('Ecreva o limite superior: ')
   
    calcular_impares(limite_inferior, limite_superior)


}

function calcular_impares(limite_inferior, limite_superior){
    for(let i = limite_inferior; i <= limite_superior; i++){
        if(i % 2 === 1)
        print(i)
    }
}

main()