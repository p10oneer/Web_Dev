num = int(input())
i = 0

while num >= 2**i:
    if num == 2**i:
        print("YES")
        break
    i += 1
