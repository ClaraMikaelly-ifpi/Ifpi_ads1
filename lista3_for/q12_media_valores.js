import { get_number, print } from '../utils/util.js'

function main(){
    const qtd_numeros = get_number('Digite a quantidade numeros que deseja: ')
    let soma = 0

    for(let i = 1; i <= qtd_numeros; i++){
        let numero = get_number('Digite o número: ')
        soma += numero
    }

    const media = soma / qtd_numeros

    print('-----------------------')
    print(`Soma dos Valores: ${soma}`)
    print(`Média dos Valores: ${media.toFixed(1)}`)

}

main()
