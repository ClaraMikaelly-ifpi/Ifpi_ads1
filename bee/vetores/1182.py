def main():
    coluna = int(input())

    operacao = input()

    matriz = obterMatriz(12, 12)
    ocuparMatriz(matriz)

    resultado = obterOperacao(coluna, matriz, operacao)

    print(f'{resultado:.1f}')


def obterMatriz(linhas, colunas):
    matriz = []
    for i in range(linhas):
        terAppend(matriz, obterVetor(colunas))
    return matriz

def terAppend(lista, elemento):
    lista.append(elemento)
    return lista

def ocuparMatriz(matriz):
    for linha in range(terLength(matriz)):
        for coluna in range(terLength(matriz[linha])):
            matriz[linha][coluna] = float(input())


def obterOperacao(coluna, matriz, operacao):
    soma = 0
    qtdElementos = 0

    for linha in range(terLength(matriz)):
        for matrizColuna in range(terLength(matriz[linha])):
            if matrizColuna == coluna:
                soma = soma + matriz[linha][matrizColuna]
                qtdElementos = qtdElementos + 1

    media = soma / qtdElementos

    if operacao == 'S':
        return soma
    else:
        return media
    
def obterVetor(tamanho):
    vetor = []
    for i in range(tamanho):
        terAppend(vetor, 0.0)
    return vetor

def terLength(vetor):
    tamanho = 0
    for item in vetor:
        tamanho = tamanho + 1
    return tamanho

main()