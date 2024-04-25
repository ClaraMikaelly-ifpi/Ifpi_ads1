import { get_number, print } from '../utils/util.js'

function main(){
    let qtd_funcionarios = get_number('Informe a quantidade de funcionarios: ')

    for (let i = 1; i <= qtd_funcionarios; i++) {
        let codigo = get_number('Código do funcionário: ')
        let hr_trabalhadas = get_number('Horas trabalhadas: ')
        let num_dependentes = get_number('Informe o número de dependentes: ')

        let salario_bruto = (hr_trabalhadas * 12) + (num_dependentes * 40)
        let desconto_inss = salario_bruto * (8.5 / 100)
        let desconto_ir = salario_bruto * (5 / 100)
        let salario_liquido = salario_bruto - (desconto_inss + desconto_ir)

        print('----------- CONTRACHEQUE -----------')
        print(`Salário Bruto: R$ ${salario_bruto.toFixed(2)}`)
        print(`INSS (8,5%): R$ ${desconto_inss.toFixed(2)}`)
        print(`IR (5%): R$ ${desconto_ir.toFixed(2)}`)
        print(`Salário Líquido: R$ ${salario_liquido.toFixed(2)}`)
        
    }
}

main()