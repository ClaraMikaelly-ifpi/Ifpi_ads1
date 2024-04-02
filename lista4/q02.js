import { get_number, print } from '../utils/util.js'

function main(){
    const n1 = get_number('Digite um número:  ')
    const n2 = get_number('Digite um número:  ')

    let mmc = eh_multiplo(n1, n2)

    while(!(eh_multiplo(mmc, n1) && eh_multiplo(mmc, n2))){
        mmc++
    }
    print(`O MMC de ${n1} e ${n2} é igual a ${mmc}`)
}

function eh_multiplo(multiplo, numero){
    return multiplo % numero == 0

}

main()