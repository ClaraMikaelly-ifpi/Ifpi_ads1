import { get_number, print } from '../utils/util.js'

function main(){
    const razao = get_number('Razão PG: ')
    let termo_1 = get_number('Primeiro termo PG: ')
    let n = get_number('número de termos a serem gerados:  ')
    let contador = 0 

    print('---------------------------')

    while(contador<n){
        print(`Termo ${contador + 1}: ${termo_1}`)
        termo_1 *= razao
        contador++
    }
}
main()