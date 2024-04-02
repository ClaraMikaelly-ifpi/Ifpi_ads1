import { get_number, print } from '../utils/util.js'

function main(){
    const n1 = get_number('Digite um número: ')
    const n2 = get_number('Digite um número: ')

    let quociente = 0
    let resto = n1

    while(resto>=n2){
        resto -= n2
        quociente++
    }

    print(`Quociente: ${quociente}`)
    print(`Resto: ${resto}`)
}
main()