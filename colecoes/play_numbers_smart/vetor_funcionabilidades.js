import { getNumber, obterNumeroAleatorio, obterNumeroIntervalo } from "./utils.js";
import { mapear, reduce, filtrar, obterTamanhoVetor, adicionarValoresLista, verificarNumeroPositivo } from "./vetor_utils.js";

// funcao para obter maior valor de vetor REDUCE
export function obterMaiorVetor(vetor){
    let maiorValor = reduce(vetor, (elemento, acumulador) => elemento > acumulador ? elemento : acumulador, vetor[0])
    return maiorValor
}

// funcao para obter menor valor REDUCE
export function obterMenorValor(vetor){
    let menorVetor = reduce(vetor, (elemento, acumulador) => elemento < acumulador ? elemento : acumulador, vetor[0])
    return menorVetor
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

// funcao para obter somatorio REDUCE
export function obterSomaVetor(vetor){
    if (obterTamanhoVetor(vetor) < 1){
        return "Vetor vazio!"
    }
    let soma = reduce(vetor, (elemento, acumulador) => elemento + acumulador, 0)
    return soma
}

//funcao para obter media REDUCE
export function obterMediaVetor(vetor){
    if (obterTamanhoVetor(vetor) < 1){
        return "Vetor vazio!"
    }
    let soma = reduce(vetor, (elemento, acumulador) => elemento + acumulador, 0 )
    let tamanho = obterTamanhoVetor(vetor)
    let media = soma/tamanho
    return media
}

// funcao para mostrar valores positivos FILTRAR
export function mostrarPositivos(vetor){
    if (obterTamanhoVetor(vetor) < 1){
        return "Vetor vazio!"
    }
    let vetorPositivo = filtrar(vetor, elemento => elemento >= 0)
    return vetorPositivo
}

// funcao para mostrar valores negativos FILTRAR
export function mostarNegativos(vetor){
    if (obterTamanhoVetor(vetor) < 1){
        return "Vetor vazio!"
    }
    let vetorNegativo = filtrar(vetor, elemento => elemento < 0)
    return vetorNegativo
}

// funcao para obter multiplicacao MAPEAR
export function multiplicarVetor(vetor){
    if (obterTamanhoVetor(vetor) < 1){
        return "Vetor vazio!"
    }
    vetor = mapear(vetor, elemento => elemento * valor)
    return vetor
}

// funcao para elevar MAPEAR
export function elevarVetor(vetor){
    if (obterTamanhoVetor(vetor) < 1){
        return "Vetor vazio!"
    }
    vetor = mapear(vetor, elemento => Math.pow(elemento, expoente))
    return vetor
}

// funcao para reduzir o valor a uma fracao MAPEAR
export function reduzirValorFracao(vetor, numerador, denominador){
    if (obterTamanhoVetor(vetor) < 1){
        return "Vetor vazio!"
    }
    vetor = mapear(vetor, elemento => elemento * numerador/denominador)
}

// funcao para substituir valores negativos por um numero aleatorio
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

// funcao para mostrar todos os valores
export function mostrarTodosValores(vetor){
    if (vetor.length === 0){
        return console.log('Não existe nenhum vetor numérico!')
    } else {
        console.log('---> Valores')
        mostrarItensVetor(vetor, "vetor numerico")
    }
}
