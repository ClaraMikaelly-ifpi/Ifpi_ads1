def main():
    qtdTeste = int(input())
    contador = 0

    while (contador < qtdTeste):
        teste = int(input())
        testeString = obterString(teste)
        qtdLeds = 0
        contador = contador + 1

        for caractere in testeString:
            if caractere == '1':
                qtdLeds = qtdLeds + 2
            elif caractere == '2':
                qtdLeds = qtdLeds + 5
            elif caractere == '3':
                qtdLeds = qtdLeds + 5
            elif caractere == '4':
                qtdLeds = qtdLeds + 4
            elif caractere == '5':
                qtdLeds = qtdLeds + 5
            elif caractere == '6':
                qtdLeds = qtdLeds + 6
            elif caractere == '7':
                qtdLeds = qtdLeds + 3
            elif caractere == '8':
                qtdLeds = qtdLeds + 7
            elif caractere == '9':
                qtdLeds = qtdLeds + 6
            elif caractere == '0':
                qtdLeds = qtdLeds + 6
                
        print(f'{qtdLeds}')

def obterString(numero):
    return str(numero)

def print(mensagem):
    print(mensagem)

main()