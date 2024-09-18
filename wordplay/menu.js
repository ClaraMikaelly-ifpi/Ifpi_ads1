import { readFileSync } from "fs" 

export function conteudo_arquivo(){
    const dados = readFileSync('words.txt', "utf-8")
    return dados
}

export function Menu(){
    let opcoes = [
        '------------------- WordPlay -------------------',
        '------------------------------------------------',
        '(1) - Palavras com +20 letras',
        '(2) - Palavras sem e',
        '(3) - Palavras Proibidas',
        '(4) - Palavras Palíndromas',
        '(5) - Palavras Abecedárias',
        '(0) - Sair',
        '------------------------------------------------'
    ]
    return opcoes
}

// funcao para obter palavras com mais de 20 letras
export function palavrasMaisVinteLetras(palavras){
    let somaPalavras = 0

    for (let palavra of palavras){
        if (palavra.length > 20 ){
            somaPalavras++
        }
    }
    return somaPalavras
}

// funcao para obter palavras sem a letra e
function hasNoE(palavra){
    for (let letra of palavra){
        if (letra == 'e'){
            return false
        } else{
            return false
        }
    } 
}
export function palavrasSemLetraE(palavras){
    let somaPalavras = 0

    for (let palavra of palavras){
        if (hasNoE(palavra)) {
            somaPalavras++
        }
    }
    return somaPalavras
}

// funcao para verificar se existe letra proibida nas palavras
export function terLetraProibida(palavra, letraProibida){
    letra = question('Quais as letras proibidas?: ')
    for (let letra of palavra){
        if (letra == letraProibida){
            return true
        } else {
            return false
        }
    }
}

// funcao para palavras políndromas
export function isPolindrome(palavra){
    let i = 0
    let j = (palavra.length) - 1

    while(i < j){
        if (palavra[i] != palavra[j]){
            return false
        }
        i++
        j--
    }
    return true
}

// funcao para obter palavras abecedaria
export function isAbecedarian(palavra){
    let i = 0

    while(i < (palavra.length - 1)){
        if (palavra[i + 1] < palavra[i]){
            return false
        }
        i++
    }
    return true
}

