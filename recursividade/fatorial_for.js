import { print, get_number } from "../utils/util.js";

function main(){
    let numero = get_number('Numero: ')

    const fatorial = obterFatorial(numero)

    print(`Fatorial de ${numero} : ${fatorial}`)

}

function obterFatorial(numero){
    //caso bases
    if (numero === 0 || numero === 1)
        return 1;

   // Começamos o laço FOR loop com i = 5
  // Diminuímos i em uma unidade após cada iteração 
    
   for (let i = numero - 1; i >= 1; i--){
    // Armazenamos o valor de num a cada iteração
    numero = numero * i // ou numero *= i;
   }
   return numero
}
main()