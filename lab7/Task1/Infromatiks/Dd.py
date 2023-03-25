num = int(input())
list = []
cnt = 0

for i in range(num):
    i = int(input())
    list.append(i)

for i in range(0, len(list)):
    if list[i] > list[i-1]:
        cnt += 1
    
print(cnt)
