import { get_number, print } from '../utils/util.js'

function main(){
    const numero_compras = get_number('Digite o número de Compra: ')
    let contador_compras = 0
    let distribuido_cashback = 0
    let contador_cashback = 0
    let soma_vendas = 0
    let menor = Infinity
    let maior = Infinity

    while(contador_compras < total_compras ){
        const nome_cliente = get_number('Nome do Cliente: ')
        const valor_compras = get_number('Digite o valor da compra: ')

        const cashback_real = calcular_cashback(valor_compras)

        cashback_maior = calcular_cash_maior(calcular_cash_maior, cashback_real)
        cashback_menor = calcular_cash_menor(calcular_cash_menor, cashback_real)

        distribuido_cashback += cashback_real
        contador_cashback++
        contador_compras++
        soma_vendas += valor_compras
    }

    const percen_cash_total_vendas = (distribuido_cashback / soma_vendas ) * 100
    const medio_cash_pago = distribuido_cashback / contador_cashback

    print('------------ COMPRAS E CASHBACKS ----------------')
    print('-------------------------------------------------')
    print(`Valor distribuido em cashback R$: ${distribuido_cashback.toFixed(2)}`)
    print(`Percentual cashback investido pela loja (%): ${percen_cash_total_vendas.toFixed(2)}`)
    print(`Faturamento total (soma das vendas): ${soma_vendas.toFixed(2)}`)
    print(`Menor valor pago em cashback R$: ${menor.toFixed(2)}`)
    print(`Maior valor pago em cashback R$: ${medio_cash_pago.toFixed(2)}`)


}

function calcular_cash_maior(maior, cashback_real){
    return Math.max(maior, cashback_real)
}

function calcular_cash_menor(menor, cashback_real){
    return Math.min(menor, cashback_real)
}

function cashback_compra_menor_750(valor_compras){
    let cashback_resul = 0
    if(valor_compras < 250){
        cashback_resul = valor_compras * 0.05
    } else if (valor_compras < 500){
        cashback_resul = valor_compras * 0.07
    } else if (valor_compras < 750){
        cashback_resul = valor_compras * 0.08
    }
    return cashback_resul
}

function cashback_compra_maior_750(valor_compras){
    const compras_acima_750 = valor_compras - 750
    const cashback_acima_750 = compras_acima_750 * 0.25
    const cashback_abaixo_750 = calcular_cash_maior_750(750)
    return cashback_acima_750 + cashback_abaixo_750
}

function calcular_cashback(valor_compras){
    if (valor_compras < 750){
        return cashback_compra_menor_750(valor_compras)
    } else {
        return cashback_compra_maior_750(valor_compras)
    }
}
main()

