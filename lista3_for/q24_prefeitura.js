import { get_number, print } from '../utils/util.js'

function main(){
    let habitantes = get_number('Informe a quantidade de pessoas entrevistadas: ')
    let total_salario = 0
    let total_entrevistados = 0
    let total_filhos = 0
    let total_salarios_mil = 0

    for (let i = 0; i <= habitantes; i++) {

        let salario = get_number('Informe o salário(R$): ')
        let num_filhos = get_number('Informe o número de filhos: ')
        total_entrevistados++

        total_filhos += num_filhos
        total_salario += salario

        if(salario <= 1000){
            total_salarios_mil++
        }

    }
    let media_salario = total_salario / total_entrevistados

    let media_filhos = total_filhos / total_entrevistados

    let media_salario_mil = (total_salarios_mil / total_entrevistados) * 100

    print('------------- RESULTADO -------------')
    print(`MÉDIA SALARIAL DA POPULAÇÃO : ${media_salario.toFixed(2)}`)
    print(`MÉDIA DO NÚMERO DE FILHOS   : ${media_filhos.toFixed(2)}`)
    print(`PERCENTUAL DE PESSOAS COM SALÁRIO ATÉ R$1000: ${media_salario_mil.toFixed(2)}%`)

}

main()