import { Menu, isAbecedarian, isPolindrome, terLetraProibida, palavrasMaisVinteLetras, palavrasSemLetraE, conteudo_arquivo } from "../wordplay/menu.js";

function main(){
    let arquivoTxt = conteudo_arquivo()
    let palavras = arquivoTxt.split('\n')

    resultadosOpcoes(palavras)
}

function resultadosOpcoes(palavras){
    let opcoes = -1

    while (opcoes !== 0){
        clear_screen()
        opcoes = mostrarOpcoes(Menu())

        // sair (0)
        if (opcoes == 0){
            clear_screen()
            console.log('Saindo...')
            break

            // palavras com +20 letras
        } else if (opcoes == 1){
            clear_screen()
            console.log(`Palavras com +20 letras ${palavrasMaisVinteLetras}`)

            // palavras sem a letra e
        } else if (opcoes == 2){
            clear_screen()
            console.log(`Plavras sem a letra e: ${palavrasSemLetraE}`)

            // palavras proibidas
        } else if (opcoes == 3){
            clear_screen()
            console.log(`Palavras sem as letras proibidas: ${terLetraProibida}`)

            // palavras polindromas
        } else if (opcoes == 4){
            clear_screen()
            console.log(`Palavras Políndromas: ${isPolindrome}`)

            // palavras abecedárias
        } else if (opcoes == 5){
            clear_screen()
            console.log(`Palavras abecedárias: ${isAbecedarian}`)
        }
    }
}

// funcao para exibir cada uma das opcoes do menu
function mostrarOpcoes(opcoes) {
    console.log('Escolha uma opção:')
    
    for (let i = 0; i < opcoes.length; i++) {
        console.log(`> ${opcoes[i]}`)
    }
    
    let opcaoEscolhida = Number(question('Opção desejada:\n'));
    
    return opcaoEscolhida
}

// funcao para limpar tela
function clear_screen(){
    console.clear()
}

main()