import { get_number, print } from '../utils/util.js'
import { question } from 'readline-sync'
function main(){
    let nome_candidata_alta = ''
    let altura_candidata_alta = 0

    let nome_candidata_baixa = ''
    let altura_candidata_baixa = Infinity

    let nome_candidata_magra = ''
    let peso_candidata_magra = Infinity

    let nome_candidata_gorda = ''
    let peso_candidata_gorda = 0

    let nome = question('Digite o nome da candidata("FIM" para sair): ')

    while (nome !== 'FIM'){
        const altura = get_number(`Digite a altura(cm) da candidata ${nome}: `)
        const peso = get_number(`Digite o peso(kg) da candidata ${nome}: `)

        if(altura > altura_candidata_alta){
            altura_candidata_alta = altura
            nome_candidata_alta = nome
        }

        if(altura < altura_candidata_baixa){
            altura_candidata_baixa = altura
            nome_candidata_baixa = nome
        }

        if (peso > peso_candidata_gorda){
            peso_candidata_gorda = peso
            nome_candidata_gorda = nome
        }

        if (peso < peso_candidata_magra){
            peso_candidata_magra = peso
            nome_candidata_magra = nome
        }

        nome = question('Digite o nome da candidata("FIM" para sair):  ')

    }

    print('-------- Candidata mais alta ----------')
    print(`NOME: ${nome_candidata_alta}`)
    print(`ALTURA(cm): ${altura_candidata_alta}`)
    print('--------- Candidata mais baixa ---------')
    print(`NOME: ${nome_candidata_baixa}`)
    print(`ALTURA(cm): ${altura_candidata_baixa}`)
    print('---------- Candidata mais magra ----------')
    print(`NOME: ${nome_candidata_magra}`)
    print(`PESO(kg): ${peso_candidata_magra}`)
    print('----------- Candidata mais gorda -----------')
    print(`NOME: ${nome_candidata_gorda}`)
    print(`PESO(kg): ${peso_candidata_gorda}`)

}

main()