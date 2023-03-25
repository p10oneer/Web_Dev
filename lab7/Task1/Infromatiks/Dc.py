num = int(input())
list = []
cnt = 0

for i in range(num):
    i = int(input())
    list.append(i)

for i in list:
    if i > 0:
        cnt += 1
    
print(cnt)