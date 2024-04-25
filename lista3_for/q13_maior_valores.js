import { get_number, print } from '../utils/util.js'

function main(){
    const qtd_numero = get_number('Digite a quantidade de numeros desejado: ')
    let maior_num = 0

    for (let i = 1; i <= qtd_numero; i++){
        const numero = get_number('Digite um numero: ')

        maior_num = calcular_maior(maior_num, numero)

    }

    print('--------------------')
    print(`Maior número: ${maior_num}`)
}

function calcular_maior(num1, num2){
    if(num1 > num2){
        return num1
    } else {
        return num2
    }
}

main()
