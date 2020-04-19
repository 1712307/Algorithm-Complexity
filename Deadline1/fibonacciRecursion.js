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
cal_complexity = (a) =>{
    let n = a.length; 
    let b = []
    for (let i = 0; i<n; i++){
        b.push([i+1,a[i],Math.pow(2,a[i] - 2) -1,Math.pow(2,a[i] - 1)] );
    }
    return b;
}
let result = cal([5,7,9,12,15,18,25,30,40,45]);
console.log(result);

