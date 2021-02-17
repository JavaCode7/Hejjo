fib: list = []
fib.append(1)
fib.append(1)
for i in range (2, 11, 1):
    fib.insert(i, fib[i-2] + fib[i-1])
for _element in fib:
    print(_element)
print(fib)