import { print, positive_number, maior_numero } from "../utils/util.js"

function main(){
    const numero1 = positive_number('Digite um número:  ')
    const numero2 = positive_number('Digite um número:  ')

    let mdc = maior_numero(numero1, numero2)

    while(!(eh_divisor(mdc, numero1) && eh_divisor(mdc, numero2))){
        mdc--
    }

    print(`O MDC de ${numero1} e ${numero2} é ${mdc}`)


}
function eh_divisor(divisor, numero){
    return numero % divisor == 0
}
main()