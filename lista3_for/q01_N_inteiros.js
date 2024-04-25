import { get_number, print } from '../utils/util.js'

function main(){
    let N = get_number('Escreva um número: ')
    
    
    for(let i = 1; N >= i; i++  ){
        print(`${i}`)
    }
}
main()