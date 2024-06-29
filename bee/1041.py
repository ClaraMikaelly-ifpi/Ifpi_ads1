x, y = [float(x) for x in input().strip().split(' ')]

if (x > 0.0):
    if (y > 0.0):
        print(f"Q1")
    elif (y < 0.0):
        print(f"Q4")
    else:
        print(f"Eixo X")
elif (x < 0.0):
    if (y > 0.0):
        print(f"Q2")
    elif (y < 0.0):
        print(f"Q3")
    else:
        print(f"Eixo X")
else:
    if (y > 0.0):
        print(f"Eixo Y")
    elif (y < 0.0):
        print(f"Eixo Y")
    else:
        print(f"Origem")
    