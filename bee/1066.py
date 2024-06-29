impar, positivo, negativo = 0, 0, 0

for _ in range(5):
    numero = int(input())

    if(abs(numero) % 2):
        impar += 1
    if (numero > 0):
        positivo += 1
    elif(numero < 0):
        negativo += 1


print(f"{5 - impar} valor(es) par(es)")
print(f"{impar} valor(es) impar(es)")
print(f"{positivo} valor(es) positivo(s)")
print(f"{negativo} valor(es) negativo(s)")
