import math

num = int(input())

while num > 0:
    if math.sqrt(num) % 1 == 0:
        print(num)
    num -= 1

