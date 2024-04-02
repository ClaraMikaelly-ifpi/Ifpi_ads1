import { get_number, print } from '../utils/util.js'

function main(){
    let canal_2 = 0
    let canal_4 = 0
    let canal_5 = 0
    let canal_7 = 0
    let canal_10 = 0

    let total_telespectadores = 0

    let canal = get_number('Escolha o canal("0" para sair): ')

    while(canal !== 0){
        const telespectadores = get_number('Digite o número de pessoas assistindo a TV: ')
        total_telespectadores += telespectadores

        if(canal === 2){
            canal_2 += telespectadores
        } else if(canal === 4){
            canal_4 += telespectadores
        } else if(canal === 5){
            canal_5 += telespectadores
        } else if(canal === 7){
            canal_7 += telespectadores
        } else {
            canal_10 += telespectadores
        }

        canal = get_number('Escolha o canal("0" para sair): ')
    }

    const porcen_canal_2 = (canal_2 / total_telespectadores) * 100
    const porcen_canal_4 = (canal_4 / total_telespectadores) * 100
    const porcen_canal_5 = (canal_5 / total_telespectadores) * 100
    const porcen_canal_7 = (canal_7 / total_telespectadores) * 100
    const porcen_canal_10 = (canal_10 / total_telespectadores) * 100

    print('-------------- CANAIS DE TV -------------')
    print('*************************************************')
    print(`Porcentagem de audiência Canal 2: ${porcen_canal_2.toFixed(2)}%`)
    print(`Porcentagem de audiência Canal 4: ${porcen_canal_4.toFixed(2)}%`)
    print(`Porcentagem de audiência Canal 5: ${porcen_canal_5.toFixed(2)}%`)
    print(`Porcentagem de audiência Canal 7: ${porcen_canal_7.toFixed(2)}%`)
    print(`Porcentagem de audiência Canal 10: ${porcen_canal_10.toFixed(2)}%`)
    print(`Total de telespectadores: ${total_telespectadores}`)

}
main()