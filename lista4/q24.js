import { get_number, print } from '../utils/util.js'

function main(){
    const razao = get_number('Razão PA: ')
    let termo_1 = get_number('Primeiro termo PA: ')
    let n = get_number('Número de termos a serem gerados: ')
    let contador = 0

    print('-----------------------------------------')

    while(contador<n){
        print(`Termo ${contador + 1}: ${termo_1}`)
        termo_1 += razao
        contador++
    }
}
main()