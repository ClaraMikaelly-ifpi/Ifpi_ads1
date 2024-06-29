A, B, C = [float(x) for x in input().strip().split(' ')]

delta = (B ** 2) -4 * A * C

if A == 0:
    print(f"Impossivel calcular")
elif delta < 0:
    print(f"Impossivel calcular")
else:
    print(f"R1 = {(-B + delta ** (1 / 2)) / (2 * A):.5f}")
    print(f"R2 = {(-B - delta ** (1 / 2)) / (2 * A):.5f}")
  
