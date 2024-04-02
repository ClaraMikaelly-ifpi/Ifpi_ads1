import { positive_number, print } from '../utils/util.js'

function main(){
    const numero = positive_number('Digite um número: ')
    
    const digitos = qtd_digitos(numero)
    print(`O número ${numero} tem ${digitos} dígitos`) 
}

function qtd_digitos(numero){
    return numero.toString().length

}

main()