number = int(input())
answer = int(input())
sim = False

if number // 1000 == number % 10 and (number % 1000) // 100 == (number % 100) // 10:
    sim = True

if sim == True and answer == 1:
    print("YES")
elif sim != True and answer != 1:
    print("YES")
else:
    print("NO")
