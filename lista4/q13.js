import { get_number, print } from '../utils/util.js'

function main(){
   let soma_salario_atual = 0
   let soma_salario_reajuste = 0
   let salario = get_number('Digite o seu salário atual: ')
    
    while(salario !== 0){
        
        soma_salario_atual += salario
        let novo_salario = 0
        if(salario <= 2999.99){
            novo_salario = salario * 1.25
        } else if (salario >= 3000 && salario <= 5999.99){
            novo_salario = salario * 1.2

        } else if (salario >= 6000 && salario <= 9999.99){
            novo_salario = salario * 0.15
        } else {
            novo_salario = salario * 1.1
        }
        soma_salario_reajuste += novo_salario

    }

    const diferenca = soma_salario_reajuste - soma_salario_atual
    print('-----------------------------------------')
    print(` SOMA DOS SALÁRIOS ATUAIS: R$ ${soma_salario_atual.toFixed(2)}`)
    print(` SOMA DOS SALÁRIOS REAJUSTADOS: R$ ${soma_salario_reajuste.toFixed(2)}`)
    print(` DIFERENÇA ENTRE AS SOMAS: R$ ${diferenca.toFixed(2)}`)
    

}

main()