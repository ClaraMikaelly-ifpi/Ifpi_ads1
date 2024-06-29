import { get_number, print } from '../utils/util.js'

function main(){
    const velocidadeMS = get_number('Escreva a velocidade em m/s:  ')

    const velocidadeKM = velocidadeMS * 3.6

    print(`A velocidade convertida de M/S para K/M: ${velocidadeKM}Km/h`)
}

main()