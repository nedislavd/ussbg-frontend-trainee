

function mixUp([n, m]) {

    let a = String(n);
    let b = String(m);
    let str1 = a.substring(0, 2);
    let str2 = b.substring(0, 2);
      b = b.replace(str2, str1);
      a = a.replace(str1, str2);
    console.log(a)
    console.log(b)
}

mixUp(['gnash', 'sport'])
