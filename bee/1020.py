dias = int(input(""))

print(f"{dias//365} ano(s)")
dias %= 365
print(f"{dias//30} mes(es)")
dias %= 30
print(f"{dias} dia(s)")