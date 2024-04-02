import { get_number, print } from '../utils/util.js'

function main(){
    const emprestimo = 3000
    const pagamento_util = 200
    const juros = 0.0085

    let saldo_Npago = emprestimo
    let qtd_uteis = 0

    while(saldo_Npago > 0){
        saldo_Npago -=pagamento_util
        saldo_Npago += saldo_Npago * juros

        qtd_uteis++
    }

    print(`São nescessários ${qtd_uteis} dias úteis para a conclusão do pagamento.`)
}
main()