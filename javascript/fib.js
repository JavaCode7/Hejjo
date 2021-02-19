// Javascript program to print the first 10 digits of the fibonacci sequence

var fib = new Array()
fib.push(1, 1)
for (var i = 2; i < 11; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
}
fib.forEach((_element) => {
    console.log(_element)
});