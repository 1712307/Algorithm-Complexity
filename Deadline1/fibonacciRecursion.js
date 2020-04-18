let count_addition = 0;
let count_compare = 0;
fibonacci = (n) => {
    count_compare++;
    if (n <= 1)
        return 1;
    count_addition++;
    return fibonacci(n-1) + fibonacci(n-2);
}

blackbox = (a) => {
    let n = a.length; 
    let b = []
    for (let i = 0; i<n; i++){
        let $ = fibonacci(a[i]);
        b.push([a[i],$,count_compare,count_addition]);
        count_addition = 0;
        count_compare = 0;
    }
    return b;
} 
let result = blackbox([5,7,15]);
console.log(result);