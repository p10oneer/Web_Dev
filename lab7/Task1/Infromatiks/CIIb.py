num = int(input())
i = 2

while num > i:
    if num % i == 0:
        print(i)
        break
    else:
        i += 1
