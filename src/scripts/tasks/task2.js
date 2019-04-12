


function solve([n]) {
    let result = [1];
    let displayResult = [];
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if ()
           result[i][j] = result[i][j-1] + result[i][j];
           console.log(result[i][j])
        }
    }

 }
solve(["5"]);

function solve2([n]) {
    n = Number(n);
    let result = [];
    result[0] = [1];
    result[1] = [1,1];
    for (let row = 1; row < n; row++) {
        console.log(" ".repeat(n - row));
        for (let col = row - 1 ; col <= row; col++) {
            if (row == col || col == 0) {
                result[row][col] = 1;
            }
            // if ()
            // else result = result * (row - col + 1) / col;
            debugger;
            result[row][col] = result[row-1][col-1] + result[row-1][col];

            console.log(result + ' ');
        }
    }

    return(result)
}

solve2(["5"]);

function solve3([n]) {
    n = Number(n);
    let result = 1;
    let displayResult = [];
    displayResult[0] = [1];
    displayResult[1] = [1,1];
    for (let row = 0; row < n; row++) {
        console.log(" ".repeat(n - row));
        for (let col = 0; col <= row; col++) {
            if (row == 0 || col == 0) {
                result = 1
                displayResult[row].push(1);
            } else {
                result = result * (row - col + 1) / col;
                displayResult[row][col] = result * (row - col + 1) / col;
            }

            console.log(result + ' ');
        }
    }

    console.log(displayResult)
}

solve3(["5"]);

