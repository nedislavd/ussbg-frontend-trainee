




function charFreq(n) {

    // let count = 0;
    let frequencyCount = {};
   /* for (let i = 0; i <= n.length; i++) {
        // console.log(n.charAt(i))
        if (frequencyCount[n.charAt(i)]) {
            frequencyCount[n.charAt(i)]++
        } else {
            frequencyCount[n.charAt(i)] = 1;
        }
        // for (let j = i + 1; j <= n.length; j++) {
        //     if (n[j]=== n[i]) {
        //     count++;
        //     console.log('elemnet ' + n[j] + " " + count)
        //     }
        //
        // }
    }
    */
    let stringArray = n.toLowerCase().split('');
    console.log(stringArray);

    stringArray.forEach((char) => {
        frequencyCount[char] ? frequencyCount[char]++ : frequencyCount[char] = 1;
    })

    return frequencyCount

}

console.log(charFreq('aabiabcbdbabd'));