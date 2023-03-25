velocity = int(input())
time = int(input())
length = 109

passed = velocity * time

if passed < length:
    passed = length - abs(passed)
else: 
    while abs(passed) > length:
        passed = abs(passed) - length

print(passed)