def main():
    while True :
        numero_decimal = int(input("Digite um numero decimal entre 0 e 255: "))
        if 0 <= numero_decimal <= 255:
            binario = converter_binario(numero_decimal)
            hexadecimal = converter_hexadecimal(numero_decimal)

            print(f"Em binário: {binario}")
            print(f"Em Hexadecimal: {hexadecimal}")
        else:
            print("Número não permitido")


def converter_binario(numero):
    return bin(numero)[2:]

def converter_hexadecimal(numero):
    return hex(numero)[2:].upper()

main()