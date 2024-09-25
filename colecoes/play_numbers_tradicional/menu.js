// funcao para o mneu de opcoes
export function menuOpcoes(){
    let opcoes = [
        '>>>>>>>>>>>>> Play Numbers <<<<<<<<<<<<<',
        '----------------------------------------',
        '(1) - Inicializar Vetor Númerico ',
        '(2) - Mostrar todos os valores',
        '(3) - Resetar Vetor',
        '(4) - Ver quantidade de itens no vetor',
        '(5) - Ver Menor e Maior valores e suas posições',
        '(6) - Somatório dos Valores',
        '(7) - Média dos Valores',
        '(8) - Mostrar Valores Positivos e Quantidade',
        '(9) - Mostrar Valores Negativos e Suas Quantidade',
        '(10) - Atualizar todos os valores por uma regra',
        '(11) - Adicionar Novos Valores',
        '(12) - Remover Itens por Valor exato',
        '(13) - Remover por Posição',
        '(14) - Editar valor específico por Posição',
        '(15) - Salvar valores em arquivo',
        '(0) - Sair',
        '----------------------------------------']
        return opcoes
}

//funcao para atualizar opcoes do vetor
export function menuOpcoesAtualizar(){
    let opcoes = [
        '>>>>>>>>>>>>>>>>>>> Atualizações <<<<<<<<<<<<<<<<<<',
        '---------------------------------------------------',
        '(1) - Multiplicar por um valor',
        '(2) - Elevar a um valor',
        '(3) - Reduzir a uma fração',
        '(4) - Substituir valores negativos por um número aleatórios da uma faixa',
        '(5) - Ordenar valores',
        '(6) - Embaralhar valores',
        '---------------------------------------------------']
        return opcoes
}

//funcao para inicializar vetor
export function menuInicializacaoVetor(){
    let opcoes = [
        '>>>>>>>>>>>>>>>>>>>>> Inicializar Vetor Númerico <<<<<<<<<<<<<<<<<<',
        '-------------------------------------------------------------------',
        '(1) - Gerar vetor de tamanho N',
        '(2) - Preencher vetor em uma faixa',
        '(0) - Sair',
        '--------------------------------------------------------------------',
    ]
    return opcoes
}