while(True):
    X, Y = [float(x) for x in input().strip().split(' ')]
    if (X == Y):
         break


    if (X < Y):
      print(f"Crescente")
    else:
      print(f"Decrescente")
