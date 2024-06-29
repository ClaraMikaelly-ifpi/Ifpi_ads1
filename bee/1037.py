valor = float(input(""))

if (0 <= valor <= 25):
    print(f"Intervalo [0,25]")
elif (25<= valor <= 50):
    print(f"Intervalo (25,50]")
elif (50 <= valor <= 75):
    print(f"Intervalo (50,75]")
elif (75 <= valor <= 100):
    print(f"Intervalo (75,100]")
else:
    print(f"Fora de intervalo")