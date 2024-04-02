import { get_number, print } from '../utils/util.js'

function main(){
    let numero_identificacao_magro = 0
    let peso_boi_magro = Infinity

    let numero_identificacao_gordo = 0
    let peso_boi_gordo = 0

    let numero_identificacao = get_number('Digite o número de identicação("0" para sair):  ')

    while(numero_identificacao !== 0){
        const peso = get_number(`Digite o peso(kg) do ${numero_identificacao}:`)

        if(peso > peso_boi_gordo){
            peso_boi_gordo = numero_identificacao 
        }
        if(peso < peso_boi_magro){
            peso_boi_magro = numero_identificacao
        }
        numero_identificacao = get_number('Digite o número de identicação("0" para sair):  ')
    }
    print('---------- Boi mais magro ---------')
    print(`Nº de identificação: ${numero_identificacao_magro}`)
    print(`PESO: ${peso_boi_magro}`)
    print('---------- Boi mais gordo ----------')
    print(`Nº de identificação: ${numero_identificacao_gordo}`)
    print(`PESO: ${peso_boi_gordo}`)

}

main()