import { get_number, print } from '../utils/util.js'

function main(){
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indeciso = 0
    let outros = 0
    let nulo_branco = 0
    let contador_votos = 0
    let voto = get_number('Digite o seu voto: ')

    while(voto != -1){
        contador_votos++
        
        if(voto == 45){
            serra++
        } else if(voto == 13) {
            dilma++
        } else if(voto == 23){
            ciro++
        } else if(voto == 99){
            indeciso++
        } else if(voto == 98){
            outros++
        } else if(voto == 0){
            nulo_branco++
        }
        voto = get_number('Digite o seu voto:  ')
    }
    const total_entrevistados = contador_votos + indeciso + outros + nulo_branco
    const porcen_serra = (serra / total_entrevistados) * 100
    const porcen_dilma = (dilma / total_entrevistados) * 100
    const porcen_ciro = (ciro / total_entrevistados) * 100
    const porcen_indeciso = (indeciso / total_entrevistados) * 100
    const porcen_outros = (outros / total_entrevistados) * 100
    const porcen_nulo_branco = (nulo_branco / total_entrevistados) * 100
    print('----------------------------------')
    print(`Porcentagem de votos para Serra: ${porcen_serra.toFixed(2)}%`)
    print(`Porcentagem de votos para Dilma: ${porcen_dilma.toFixed(2)}%`)
    print(`Porcentagem de votos para Ciro Gomes: ${porcen_ciro.toFixed(2)}%`)
    print(`Porcentagem de votos para Indecisos: ${porcen_indeciso.toFixed(2)}%`)
    print(`Porcentagem de votos para Outros: ${porcen_outros.toFixed(2)}%`)
    print(`Porcentagem de votos para Nulo/Brancos: ${porcen_nulo_branco.toFixed(2)}%`)
    print(`Total de entrevistados: ${total_entrevistados}`)
    
    if(porcen_serra < 50 && porcen_dilma < 50 && porcen_ciro < 50){
        print('Tem possibilidade de haver segundo turno')
    } else {
        print('Não há possibilidade de haver segundo turno')
    }
}

main()