A, B = [int(x) for x in input().strip().split(' ')]

if(A < B):
    A, B = B, A
if (A % B == 0):
    print(f"Sao Multiplos")
else:
    print(f"Nao sao Multiplos")
