


function fibonacciGenerator(n) {
    let result = [ ];
    result[1] = 1;
    result[2] = 1;
    for (let i = 3; i <= n; i++) {
     result[i]=result[i-1] + result[i-2];
    }
    console.log(result[n])
}

fibonacciGenerator(6)