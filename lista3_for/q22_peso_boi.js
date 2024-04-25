import { get_number, print, } from '../utils/util.js'
import { question } from 'readline-sync'

function main(){
    let fichas = get_number('Informe quantidade de fichas: ')
    let num_id_gordo = 0
    let num_id_magro = 0
    let peso_magro = Infinity
    let peso_gordo = 0
    let total = 0

    for (let i = 1; i <= fichas; i++) {
        let num_id = get_number('Informe o N° de Indenticação: ')
        let nome = question('Informe o Nome: ')
        let peso = get_number('Informe o Peso(kg): ')
        total++

        if(peso > peso_gordo){
            peso_gordo = peso
            num_id_gordo = num_id
        }

        if(peso < peso_magro){
            peso_magro = peso
            num_id_magro = num_id
        }
    }

    print('----------------- RESULTADOS ----------------')
    print(`PESO DO BOI MAIS GORDO: ${peso_gordo.toFixed(2)}KG`)
    print(`IDENTIFICAÇÃO BOI MAIS GORDO: ${num_id_gordo}`)
    print(`PESO DO BOI MAIS MAGRO: ${peso_magro.toFixed(2)}KG`)
    print(`IDENTIFICAÇÃO BOI MAIS MAGRO: ${num_id_magro}`)
    

}

main()
