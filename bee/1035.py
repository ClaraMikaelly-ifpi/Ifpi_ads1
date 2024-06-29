A, B, C, D = [int(x) for x in input().strip().split(' ')]

if((B > C) and (B > A) and ((C + D) > (A + B)) and (C and D > 0) and (A % 2 == 0)):
   print(f"Valores aceitos")
else: 
   print(f"Valores nao aceitos")