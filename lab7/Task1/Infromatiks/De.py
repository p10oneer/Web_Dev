num = int(input())
list = []
cnt = 0

for i in range(num):
    i = int(input())
    list.append(i)

for i in range(0, len(list)):
    if (list[i] > 0 and list[i-1] > 0):
        print("YES")
        break
    elif list[i] < 0 and list[i-1] < 0:
        print("YES")
        break
    else:
        print("NO")
    
