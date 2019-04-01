


function numberVowels(n) {
    let count = 0;
    for (let i = 0; i <= n.length; i++) {
        if (n[i] === 'a') count++;
        if (n[i] === 'e') count++;
        if (n[i] === 'o') count++;
        if (n[i] === 'u') count++;
    }
    console.log('vowels: ' + count)
}

numberVowels('Find the number of the vowels here')