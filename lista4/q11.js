import {get_number, print} from '../utils/util.js'

function main(){
    let qtd_alunos = 0
    let total_aprovados = 0
    let total_reprovados = 0
    let matricula = get_number('Digite a matricula do aluno:  ')

    while(matricula !== 0){
    
    const nota1 = get_number('Digite a nota 1: ')
    const nota2 = get_number('Digite a nota 2: ')
    const nota3 = get_number('Digite a nota 3: ')

    qtd_alunos++

    const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

    if(media >= 7){
        total_aprovados++
    } else {
        total_reprovados++
    }

    print('RESULTADOS FINAIS')
    print('-----------------------------------')
    print(`TOTAL DE ALUNOS: ${qtd_alunos}`)
    print(`TOTAL DE ALUNOS APROVADOS: ${total_aprovados}`)
    print(`TOTAL DE ALUNOS REPROVADOS: ${total_reprovados}`)
    print('------------------------------------')
    }
    
    
}
main()