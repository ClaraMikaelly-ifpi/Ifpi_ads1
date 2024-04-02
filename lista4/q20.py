def main():
    distancia_percorrida = 0
    litros_consumidos = 0

    while(distancia_percorrida < 600 and litros_consumidos < 50):
        distancia = int(input("Digite a distância percorrida: "))
        litros = int(input("Digite os litros consumidos: "))
        distancia_percorrida += distancia
        litros_consumidos += litros

    if distancia_percorrida >= 600:
        print("Chegada ao seu destino")
    else:
        print("Não chegou ao destino")
        if litros_consumidos >= 50:
            print("Viagem interrompida por falta de combustível")
    
    if distancia_percorrida > 0:
        cosumo = distancia_percorrida/litros_consumidos
        print(f"Consumo do carro: {cosumo:.2f} km/l")


main()