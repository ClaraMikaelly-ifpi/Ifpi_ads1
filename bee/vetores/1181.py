def main():
    linha = int(input())

    operacao = input()

    matriz = obterMatriz(12, 12)

    ocuparMatriz(matriz)

    resultado = obterOperacao(linha, matriz, operacao)

    print(resultado)


def obterMatriz(linhas, colunas):
    matriz = []
    for i in range(linhas):
        terAppend(matriz, obterVetor(colunas))
    return matriz

def ocuparMatriz(matriz):
    for linha in range(terLength(matriz)):
        for coluna in range(terLength(matriz[linha])):
            matriz[linha][coluna] = float(input())


def terAppend(lista, elemneto):
    lista.append(elemneto)
    return lista


def obterOperacao(linha, matriz, operacao):
    soma = 0

    for numero in matriz[linha]:
        soma += numero

    media = soma / terLength(matriz[linha])

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