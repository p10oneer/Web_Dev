num = int(input())
list = []

for i in range(num):
    i = int(input())
    list.append(i)

for i in list:
    if i % 2 == 0:
        print(i)