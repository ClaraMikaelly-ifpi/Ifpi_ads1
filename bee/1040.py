N1, N2, N3, N4 = [float(x) for x in input().strip().split(' ')]

media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1))/ 10
print(f"Media: {media:.1f}")

if (media >= 7.0):

    print(f"Aluno aprovado.")

elif (media >= 5.0 and media <= 6.9):
    print(f"Aluno em exame.")

    exame = float(input().strip())

    print(f"Nota do exame: {exame:.1f}")
    media_exame = (exame + media) / 2

    if (media_exame >= 5.0):
        print(f"Aluno aprovado.")
    else:
        print(f"Aluno reprovado.")
    print(f"Media final: {media_exame:.1f}")
    
else:
    print(f"Aluno reprovado.")
