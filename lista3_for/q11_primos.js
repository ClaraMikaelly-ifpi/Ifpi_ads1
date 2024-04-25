import { get_number, print } from '../utils/util.js'

function main(){

    let limite_inferior = get_number('Escreva o limite inferior: ')
    let limite_superior = get_number('Escreva o limite superior: ')

    calcular_primos(limite_inferior, limite_superior)

}

function calcular_primos(limite_inferior, limite_superior){
    for(let i = limite_inferior; i <= limite_superior; i++){
        if(i < 2 ){
            continue
        }

        let primo = true

        for( let p = 2; p <= Math.sqrt(i); p++){
            if (i % p === 0){
                primo = false
                break
            }
        }
        
        if(primo){
            print(i)
        }
    
    }
}

main()