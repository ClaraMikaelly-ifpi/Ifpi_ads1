import { get_number, print } from '../utils/util.js'

function main(){
    const n1 = get_number('Digite um número: ')
    const n2 = get_number('Digite um número: ')

    let resultado = 0
    let contador = 0

    while (contador < n1){
        resultado += n2
        contador++
    }

    print(`A multiplicação é: ${resultado}`)
}
main()