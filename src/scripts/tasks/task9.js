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
        var para = document.createElement("P");
        document.getElementById("myDIV").appendChild(para);

        for (let i = 0; i < triangle[displayRow].length; i++) {
            var rowEl = document.createElement("SPAN");
            rowEl.innerHTML = triangle[displayRow][i];
            para.appendChild(rowEl);
        }
    }

};

function myFunction() {
    var div = document.getElementById('myDIV');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    generatePascalsTriangle(document.getElementById("myInput").value);
}

