


function findLongestWord([n]) {
    let max = 0;
    let d = n.split(' ');
    for (let i = 0; i < d.length; i++) {
        if (d[i].length > max) {
            max = d[i].length;
        }
    }
    console.log('The longest word is ' + max + ' elements long')
}

findLongestWord(['This should be checked for the longest word here'])
