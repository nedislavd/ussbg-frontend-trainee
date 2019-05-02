

let generatePascalsTriangle = (numberOfRows) => {
    numberOfRows = Number(numberOfRows);
    let triangle = [];
    for (let row = 0; row < numberOfRows; row++) {
        triangle[row] = [row + 1];
        for (let col = 0; col < row + 1; col++) {
            if (col == 0 || col == row) {
                triangle[row][col] = 1;
            } else {
                triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col]
            }
        }
    }
    console.log(triangle);
    for (let displayRow = 0; displayRow < triangle.length; displayRow++) {
        console.log(triangle[displayRow] + '\n')
    }
};
generatePascalsTriangle(5);
