import { get_number, print } from '../utils/util.js'

function main(){
    let A0 = get_number('Escreva o valor inicial: ')
    let limite = get_number('Escreva o limite: ')
    let R = get_number('Escreva a razão: ')

    for(let i = A0; i < limite; i++){
        print(A0)
        A0 += R
    }
}
main()