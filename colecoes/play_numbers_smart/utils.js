import { question } from 'readline-sync'
import {readFileSync} from "fs"

// funcao para carregar arquivo
export function salvarArquivo(nomeArquivo){
    return readFileSync(nomeArquivo, "utf-8")
}

//funcao printar
export function mostrarTexto(descricao){
    console.log(descricao)
}

//funcao mostrar menu
export function mostrarOpcoes(opcoes, descricao = 'Escolha a opção desejada: '){
    console.log(descricao)

    for (let i = 0; i < opcoes.length; i++){
        console.log(`>> ${opcoes[i]}`)
    }

    let escolherOpcoes = Number(question('Escolha o número da opção desejada:'))
    return escolherOpcoes
}

//funcao obter numero minimo
export function obterNumeroMin(descricao, minimo){
    let numero = getNumber(descricao)

    if (numero < minimo){
        mostrarTexto('Número inválido! Digite novamente')
        return getNumberMin(descricao, minimo)
    }
    return numero
}

// funcao obter numero positivo
export function terNumeroPositivo(descricao){
    let numero = getNumber(descricao)

    if(numero <= 0 ){
        mostrarTexto(`Valor inválido!`)
        return terNumeroPositivo(descricao)
    }
    return numero
}

//funcao obter numero negativo
export function terNumeroNegativo(descricao){
    let numero = getNumber(descricao)

    if (numero > 0){
        mostrarTexto('Valor Inválido. Digite um numero negativo!')
        return terNumeroNegativo(descricao)
    }
    return numero
}

// funcao para obter numero
export function getNumber(descricao){
    return Number(question(descricao))
}

// funcao obter numero aleatorio
export function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//funcao obter texto
export function getTexto(descricao){
    let texto = question(descricao)
    return texto
}

// funcao clear
export function clear(){
    console.clear()
}

//funcao para continuar
export function continueComEnter(){
    question("\nContinue com Enter para voltar")
}

//funcao para obter o numero num intervalo min e max
export function obterNumeroIntervalo(descricao, valorMin, valorMax){
    let numero = getNumber(descricao)

    if(!(numero >= valorMin && numero <= valorMax)){
        mostrarTexto('O valor está fora da faixa')
        return obterNumeroIntervalo(descricao, valorMin, valorMax)
    }
    return numero
}