import { question } from "readline-sync";

function main(){
    let quantidade = Number(question('Quantidade: '))

    let numeros = []
    for(let i = 0; i < quantidade; i++){
        let numero = Number(question(`Numeros ${i + 1}: `))
        numeros.push(numero)
    }

    let menor = obterMenorValor(numeros)
    let posicao = obterPosicao(menor)

    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${posicao}`)
}

function obterMenorValor(numeros){
    return numeros.reduce((min, current) => (current < min ? current : min), numeros[0]);

}

function obterPosicao(numeros){
    return numeros.indexOf(obterMenorValor)
}

main()