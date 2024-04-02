import { get_number, print } from '../utils/util.js'

function main(){
    let jogador1 = 0
    let jogador2 = 0

    while(true){
    const jgd1 = get_number('Digite os pontos do jogador 1: ')
    jogador1 += jgd1
    const jgd2 = get_number('Digite os pontos do jogador 2: ')
    jogador2 += jgd2
   
    if(jogador1 >= 21 && jogador1 - jogador2 >= 2 || jogador1 > 21){
        print('--------------------')
        print('JOGADOR 1 VENCEU!')
        
    } else if (jogador2 > 21 && jogador2 - jogador1 >= 2 || jogador2 > 21){
        print('--------------------')
        print('JOGADOR 2 VENCEU!')
        
    }

    }
}

main()