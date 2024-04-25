import { get_number, print } from '../utils/util.js'

function main(){
    const qts_termos = get_number('Digite a quantidade de termos: ')

    let termos = calcular_termos(qts_termos)

    print('-------------------------------------------')
    print(`Os primeiros termos da sequência: ${termos}`)

}
function calcular_termos(termos){
    let repeticao = 0
    let soma_digito = 1
    let sequencia = ''

    for(let i = 0 ;i < termos ;i++){

        repeticao = repeticao + soma_digito //o digito anterior é somado com o Somador 
        soma_digito += 1

        sequencia = sequencia + ` ${repeticao};`
        
    }

    return sequencia
}


main()