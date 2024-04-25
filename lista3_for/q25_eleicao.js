import { get_number, print } from '../utils/util.js'

function main(){
    let qtd_eleitores = get_number('Informe a quantidade de eleitores: ')
    let total_votos = 0
    let total_votos_candidato1 = 0
    let total_votos_candidato2 = 0
    let total_votos_candidato3 = 0
    let total_nulos = 0
    let total_brancos = 0

    for (let i = 1; i <= qtd_eleitores; i++) {
        let voto = get_number('Escolha seu voto(1, 2, 3) ou (9 - nulo, 0 - branco): ')
        total_votos++

        if(voto === 1){
            total_votos_candidato1++
        } else if (voto === 2){
            total_votos_candidato2++
        } else if (voto === 3){
            total_votos_candidato3++
        } else if (voto === 9){
            total_nulos++
        } else if (voto === 0){
            total_brancos++
        } else {
            print('Número invalido')
        }
    }
    print('----------- RESULTADO ----------')
    print(`Total votos candidato 1: ${total_votos_candidato1}`)
    print(`Total votos candidato 2: ${total_votos_candidato2}`)
    print(`Total votos candidato 3: ${total_votos_candidato3}`)
    print(`Total votos nulos: ${total_nulos}`)
    print(`Total votos brancos: ${total_brancos}`)
    print('------------------------------------')

    if(total_votos_candidato1 > total_votos_candidato2 && total_votos_candidato1 > total_votos_candidato3){
        print('Candidato 1 venceu.')
    } else if (total_votos_candidato2 > total_votos_candidato1 && total_votos_candidato2 > total_votos_candidato3){
        print('Candidato 2 venceu')
    } else if(total_votos_candidato3 > total_votos_candidato1 && total_votos_candidato3 > total_votos_candidato2){
        print('Candidato 3 venceu')
    } else {
        print('Resultado foi nulo ou branco')
    }
    
    
}

main()