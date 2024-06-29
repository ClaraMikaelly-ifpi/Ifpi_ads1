import { get_number, print } from '../utils/util.js'
import { question } from 'readline-sync'

function main(){
    let soma_investimento = 0
    let soma_objetivo = 0
    let soma_meses_objetivo = 0


    while(soma_investimento >= soma_objetivo){
        const objetivo = question('Qual é o seu Objetivo?: ')
        const quanto_realizar = get_number('De quanto você precisa para realiza-lo?: ')
        const salario = get_number('Digite o valor do seu sálario: ')
        const precisa_investir = get_number('Quanto você precisa investir (%)?: ')
        const taxa_juros = get_number('Qual a taxa de juros do investimento escolhido?: ')

        soma_meses_objetivo = calcular_meses_objetivo(objetivo, precisa_investir)
        soma_investimento = calcular_investimentos(salario, taxa_juros)
        soma_objetivo = calcular_objetivo()
    }

    print('------------- INVESTIMENTO -------------------')
    print(`Mariana atingira o objetivo em ${soma_meses_objetivo} `)
}