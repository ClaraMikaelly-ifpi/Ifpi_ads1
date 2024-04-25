import { get_number, print } from '../utils/util.js'

function main(){
    const n = get_number('Ecreva um número: ')

    if(n > 0 && n <= 10){
        for(let i = 1; i <= 10; i++){
            print(`${n} * ${i} = ${n * i}`)
        }
    }
}

main()