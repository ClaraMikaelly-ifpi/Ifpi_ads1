import { get_number, print } from '../utils/util.js'

function main(){
    let N = get_number('Escreva um número: ')
    let LimiteSuperior = get_number('Escreva o limite superior: ')
    let LimiteInferior = get_number('Escreva o limite inferior: ')
    let multiplos = calcular_multiplos(N, LimiteInferior, LimiteSuperior)

    print(`Os múltiplos entre os limites: ${multiplos}`)
}

function calcular_multiplos(N, LimiteInferior, LimiteSuperior){
    for (let i = LimiteInferior; i <= LimiteSuperior; i++){
        if(i % N === 0){
            print(i)
        }
    }
}

main()