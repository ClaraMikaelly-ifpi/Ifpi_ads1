import { get_number, print } from '../utils/util.js'

function main(){
    let limite_inferior = get_number('Escreva o limite inferior: ')
    let limite_superior = get_number('Escreva o limite superior: ')
   
    calcular_pares(limite_inferior, limite_superior)

}

function calcular_pares(limite_inferior, limite_superior){
    for (let  i = limite_inferior; i <= limite_superior; i++ )
        if(i % 2 === 0){
            print(i)
        }
}

main()