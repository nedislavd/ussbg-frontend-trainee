


function solve([n]) {
    n = Number(n);
    let result =new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = [];
    }

  //  for (let row = 0; row < n; row++) {
      /*  for (let blank=0; blank<n-row; blank++)
            {
                console.log(' ');
            }
        for (let col = 0; col <row+1; col++) {
           */ if (row === 0 || col === 0) { result[row][col]=1; }
            else
                {
                    result[row][col] = result[row][col] ;
                }

             console.log(result[row][col] + '  ');
         }
        }
    }

solve(["5"]);

