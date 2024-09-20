def main():
    matriz = []
    operacao = input()

    for i in range(12):
        terAppend(matriz, [])
        for j in range(12):
            num = float(input())
            terAppend(matriz[i], num)

    soma = 0
    qtdElemntos = 0
    coluna = 11

    for i in range(1, 11):
        for j in range(coluna, 12):
            soma += matriz[i][j]

            qtdElemntos += 1

        if i < 5:
            coluna -= 1
        if i > 5:
            coluna += 1

    media = soma / qtdElemntos

    if operacao == 'S':
        return soma
    else :
         return media

def terAppend(lista, item):
    lista.append(item)
    return lista

main()