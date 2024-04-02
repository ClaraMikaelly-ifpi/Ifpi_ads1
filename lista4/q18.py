def main():
    populacao_A = 200000
    populacao_B = 800000
    anos = 0

    while(populacao_A < populacao_B):
        populacao_A += populacao_A * (3.5/100)
        populacao_B += populacao_B * (1.35/100)
        anos += 1

    print(f"Demoraria {anos} anos para que a população da cidade A ultrapassar a cidade B")

main()