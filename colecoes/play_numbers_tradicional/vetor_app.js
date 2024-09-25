import { terNumeroPositivo, mostrarOpcoes, mostrarTexto, clear, getNumber, continueComEnter } from "../play_numbers/utils.js";
import { obterMaiorVetor, obterMediaValores, obterPosicaoMenorValor, obterSomatorioValores, obterPosicaoMaiorValor, mostrarPositivos, mostrarNegativos, mostrarTodosValores, resetarVetor, obterMenorValor, obterNovoVetor, PreencherVetorMinMax, multiplicarValores, elevarValores, reduzirValorFracao, substituirNumerosNegativosAleatorio, adicionarNovosValores} from "./vetor_funcionabilidades.js";
import { mostrarItensVetor, obterTamanhoVetor } from "./vetor_utils.js";
import {menuOpcoes, menuOpcoesAtualizar, menuInicializacaoVetor} from "./menu.js";

function main(){
    let vetor = []
    let opcao = -1

    while (opcao !== 0){
        clear()
        opcao = mostrarOpcoes(menuOpcoes())

        //(0) - sair
        if (opcao == 0){
            clear()
            mostrarTexto('Finalizando...')
            break

        // (1) - inicializar vetor
        } else if (opcao == 1){
            clear()
            let inicializar = -1
            
            while (inicializar !== 0){
                clear()
                inicializar = mostrarOpcoes(menuInicializacaoVetor())

                // (0) - sair
                if (inicializar == 0){
                    clear()
                    mostrarTexto('Finalzando...')
                    break

                // (1) - gerar vetor de tamanho N
                } else if (inicializar == 1){
                    clear()
                    let tamanho = terNumeroPositivo('Informe o tamanho do vetor: ')
                    vetor = obterNovoVetor(tamanho)
                    mostrarTexto('Vetor criado!')
                    continueComEnter()

                // (2) - preencher vetor em uma faixa
                } else if (inicializar == 2){
                    clear()
                    let minimo = getNumber('Informe o valor mínimo: ')
                    let maximo = getNumber('Informe o valor máximo: ', minimo + 1)
                    vetor = PreencherVetorMinMax(vetor, minimo, maximo)
                    mostrarItensVetor(`Vetor: ${vetor}`)
                    continueComEnter()
                }
            }

        // (2) - mostrar vetor
        } else if (opcao == 2){
            clear()
            mostrarTodosValores(vetor)
            continueComEnter()

        // (3) - Resetar valor
        } else if(opcao == 3){
            clear()
            vetor = resetarVetor()
            mostrarTexto('\n -----> Vetor resetado!')
            continueComEnter()

        // (4) - Quantidade de itens no vetor
        } else if (opcao == 4){
            clear()
            let vetorTamanho = obterTamanhoVetor(vetor)
            mostrarTexto(`---> Tamanho vetor ${vetorTamanho}`)
            continueComEnter()

        // (5) - maior e menor valor e a sua posicao
        } else if (opcao == 5){
            clear()
            let maiorValor = obterMaiorVetor(vetor)
            let maiorPosicao = obterPosicaoMaiorValor(vetor)
            let menorValor = obterMenorValor(vetor)
            let menorPosicao = obterPosicaoMenorValor(vetor)

            mostrarTexto(`Maior Valor: ${maiorValor}`)
            mostrarTexto(`Posição Maior: ${maiorPosicao}`)
            mostrarTexto(`Menor Valor: ${menorValor}`)
            mostrarTexto(`Posição Menor: ${menorPosicao}`)
            continueComEnter()

        // (6) - somatorio
        }else if(opcao == 6){
            clear()
            let soma = obterSomatorioValores(vetor)
            mostrarTexto(`Soma: ${soma.toFixed(2)}`)
            continueComEnter()

        // (7) - media 
        } else if(opcao == 7){
            clear()
            let media = obterMediaValores(vetor)
            mostrarTexto(`Média: ${media.toFixed(2)}`)
            continueComEnter()

        // (8) - valores positivos e quantidade
        } else if(opcao == 8){
            clear()
            let positivos = mostrarPositivos(vetor)
            mostrarTexto(`Valores Positivos: ${positivos}`)
            mostrarTexto(`Quantidade de Positivos: ${obterTamanhoVetor(positivos)}`)
            continueComEnter()

        // (9) - valores negativos e quantidade
        } else if(opcao == 9){
            clear()
            let negativos = mostrarNegativos(vetor)
            mostrarTexto(`Valores Negativos: ${negativos}`)
            mostrarTexto(`Quantidade de Negativos: ${obterTamanhoVetor(negativos)}`)
            continueComEnter()

        // (10) - Atualizar valores
        } else if (opcao == 10){
            clear()
            let atualizado = -1

            while(atualizado !== 0){
                clear()
                atualizado = mostrarOpcoes(menuOpcoesAtualizar())

                // (0) sair
                if (atualizado == 0){
                    clear()
                    mostrarTexto('Encerrando...')
                    break

                // (1) - multiplicar
                } else if (atualizado == 1){
                    clear()
                    let valor = getNumber('Informe o valor que deseja multiplicar: ')
                    vetor = multiplicarValores(vetor, valor)
                    mostrarItensVetor(`Multiplição: ${vetor}`)
                    continueComEnter()

                // (2) elevar
                } else if (atualizado == 2){
                    clear()
                    let expoente = getNumber('Informe o valor que deseja elevar: ')
                    vetor = elevarValores(vetor, expoente)
                    mostrarItensVetor(`Exponenciaçao: ${vetor}`)
                    continueComEnter()

                // (3) - reduzir a uma fracao 
                } else if (atualizado == 3){
                    clear()
                    let numerador = getNumber('Informe o numerador desejado: ')
                    let denominador = getNumber('Informe o denominador desejado: ')
                    vetor = reduzirValorFracao(vetor, numerador, denominador)
                    mostrarItensVetor(`Reduzido: ${vetor}`)
                    continueComEnter()

                //(4) - Substituir valores negativos por um número aleatórios da uma faixa(min, max)
                } else if (atualizado == 4){
                    clear()
                    let minimo = getNumber('Informe o valor mínimo: ')
                    let maximo = getNumber('Informe o valor máximo: ', minimo + 1)
                    vetor = substituirNumerosNegativosAleatorio(vetor, minimo, maximo)
                    mostrarItensVetor(`Vetor substituido: ${vetor}`)
                    continueComEnter()

                }


            }
        // (11) - adicionar novos valores
        } else if (opcao == 11){
            clear()
            let quantidade = getNumber('Informe os valores que deseja adicionar: ')
            vetor = adicionarNovosValores(vetor, quantidade)
            mostrarItensVetor(`Vetor adicionado: ${vetor}`)
            continueComEnter()
        // (12) - remover itens por valor exato
        } else if (opcao == 12){
            clear()
            continueComEnter()

        // (13) - remover por posição
        } else if (opcao == 13){
            clear()
            continueComEnter()

        // (14) - editar valor especifico por posição
        } else if (opcao == 14){
            clear()
            continueComEnter()

        //(15) - salvar valores em arquivo
        } else if (opcao == 15){
            clear()
            continueComEnter()
        }
    }
}

main()