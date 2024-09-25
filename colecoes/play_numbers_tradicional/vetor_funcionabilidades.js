import { getTexto, obterNumeroIntervalo, obterNumeroAleatorio, terNumeroPositivo, getNumber } from "./utils.js";
import { verificarNumeroPositivo, obterTamanhoVetor, adicionarValoresLista, mostrarItensVetor, verificarNumeroNegativo } from "./vetor_utils.js";

// funcao obter mmaior vetor
export function obterMaiorVetor(vetor){
    let maiorValor = -Infinity

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maiorValor){
            maiorValor = vetor[i]
        }
    }
    return maiorValor
}

// funcao obter menor vetor
export function obterMenorValor(vetor){
    let menorValor = Infinity

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < menorValor){
            menorValor = vetor[i]
        }
    }
    return obterMenorValor
}

// funcao obter indice e retornar a posicao do menor valor
export function obterPosicaoMaiorValor(vetor){
    
        let maiorValor = -Infinity
    
        for (let i = 0; i < vetor.length; i++){
            if (vetor[i] > maiorValor){
                maiorValor = vetor[i]
            }
        }
        
        let posicao = vetor.indexOf(maiorValor)
        return posicao
}

// funcao obter indice e retorna posicao do maior valor
export function obterPosicaoMenorValor(vetor){
    let menorValor = Infinity

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < menorValor){
            menorValor = vetor[i]
        }
    }
    let posicao = vetor.indexOf(menorValor)
    return posicao
}

// funcao obter somatorio valores
export function obterSomatorioValores(vetor){
    let somatorio = 0

    for (let i = 0; i < vetor.length; i++){
        somatorio = somatorio + vetor[i]
    }
    return somatorio
}

// funcao obter media dos valores
export function obterMediaValores(vetor){
    let media = 0

    for (let i = 0; i < vetor.length; i++){
        quantidade = obterMaiorVetor(vetor)
        somatorio = obterSomatorioValores(vetor)
        media = somatorio / quantidade
    }
    return media
}

// funcao mostrar valores positivos do vetor
export function mostrarPositivos(vetor){
    let valoresPositivos = []

    for (let i = 0; i < vetor.length; i++){
        if (terNumeroPositivo(vetor[i]))
            adicionarValoresLista(valoresPositivos, vetor[i])
    }
    return valoresPositivos
}

// funcao mostrar valores negativos do vetor
export function mostrarNegativos(vetor){
    let valoresNegativos = []

    for (let i = 0; i < vetor.length; i++){
        if (!terNumeroPositivo(vetor[i]))
            adicionarValoresLista(valoresNegativos, vetor[i])
    }
    return valoresNegativos
}

// funcao multiplicar os elementos do vetor por um elemneto escolhido pleo usuario
export function multiplicarValores(vetor, valor){
    let novoVetor = []

    for (let i = 0; i < vetor.length; i++ ){
        adicionarValoresLista(novoVetor, vetor[i] * valor)
    }
    return novoVetor
}

// funcao para elevar os elementos do vetor por um expoente escolhido pelo usuario
export function elevarValores(vetor, expoente){
    let novoVetor = []

    for (let i = 0; i < vetor.length; i++){
        adicionarValoresLista(novoVetor, Math.pow(vetor[i], expoente))
    }
} 

// funcao para reduzir o valor a uma fracao
export function reduzirValorFracao(valor, numerador, denominador){
    return valor * (numerador / denominador)
}

// funcao para substituir valores negativos por um numero aleatorio de uma faixa(min, max)
export function substituirNumerosNegativosAleatorio(vetor,min,max){

    let novoVetor = []
 
    for(let i = 0; i < vetor.length; i++){
        if(!verificarNumeroPositivo(vetor[i])){
            adicionarValoresLista(novoVetor, vetor[i] = obterNumeroAleatorio(min, max))
        }else{
            adicionarValoresLista(novoVetor, vetor[i])
        }
    }
    
    return novoVetor
}

// funcao para adicionar novos valores
export function adicionarNovosValores(vetor, quantidade){

    let contador = 0

    while (contador < quantidade){
        let numero = getNumber(`\nNúmero ${contador + 1}: `)
        adicionarNovosValores(vetor, numero)
        contador++
    }
    return vetor
}

// funcao para mostrar todos os valores
export function mostrarTodosValores(vetor){
    if (vetor.length === 0){
        return console.log('Não existe nenhum vetor numérico!')
    } else {
        print('---> Valores')
        mostrarItensVetor(vetor, "vetor numerico")
        print()
    }
}

// funcao para resetar vetor
export function resetarVetor(){
    return []
}

// funcao para iniciar um novo vetor com o tamanho informado
export function obterNovoVetor(tamanho) {
    let lista = []
    for (let i = 0; i < tamanho; i++) {
        lista.push('')
    }
    return lista
} 

// funcao para preencher vetor
export function PreencherVetorMinMax(vetor, minimo, maximo){
    let contador = 0

    while (contador < vetor.length){
        let numero = obterNumeroIntervalo(`${contador} ->`, minimo, maximo)
        vetor[contador] = numero
        contador++
    }
    return vetor
}