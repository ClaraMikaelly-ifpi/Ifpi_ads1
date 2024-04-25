import { get_number, print } from '../utils/util.js'

function main(){
    let numero = get_number('Digite um número: ')
    let maior_quad = calcular_maior_quadrado(numero)

    print('------------------------------------------------')
    print(`O maior quadrado menor ou igual é: ${maior_quad}`)

}

function calcular_maior_quadrado(numero){
   let raiz_numero = Math.floor(Math.sqrt(numero))
   return raiz_numero * raiz_numero
}

main()