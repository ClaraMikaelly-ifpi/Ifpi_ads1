import { get_number, print } from '../utils/util.js'

function main(){
    let numero = get_number('Digite um número:  ')
    while(numero !== 0){
        
        let divisores = ler_divisores(numero)
        print(`Divisores de ${numero}: ${divisores}`)
    }
}

function ler_divisores(numero){
    let divisores = []
    let i = 1
    while (i <= numero){
        if(numero % i === 0){
            divisores.push(i)
        }
        i++
    }
    return divisores
}

main()