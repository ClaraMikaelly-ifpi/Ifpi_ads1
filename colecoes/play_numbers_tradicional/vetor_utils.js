import { getTexto, mostrarTexto } from "./utils.js";

//funcao para obter tamanho do vetor
export function obterTamanhoVetor(vetor){
    let tamanho = 0

    for (let item of vetor){
        tamanho = tamanho + 1
    }
    return tamanho
}

//funcao verificar numero positivo
export function verificarNumeroPositivo(numero){
    return numero >= 0
}

// funcao verificar numero negativo
export function verificarNumeroNegativo(numero){
    return numero < 0
}

//funcao para adicionar vetor a lista
export function adicionarValoresLista(lista, item){
    lista.push(item)
    return lista
}

// funcao para mostar itens de um vetor
export function mostrarItensVetor(vetor, titulo){
    mostrarTexto(`\n ----> ${titulo}`)
    for (let o of vetor){
        mostrarTexto(">>>"+ i)
    }
}
