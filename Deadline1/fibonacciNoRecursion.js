let countAssign = 4; //before loop, we need 4 '=' for assigning
let countCompare = 1;
fibonacci = (n) =>{
    if (n<=1)
    return 1;
    let last = 1;
    let nextToLast = 1;
    let answer = 1;

    for (let i = 2; i<=n && countCompare++; i++){
        answer = last + nextToLast;
        nextToLast = last;
        last = answer;
        countAssign += 3;
    }
    return answer;
}
blackbox = (a) => {
    let n = a.length; 
    let b = []
    for (let i = 0; i<n; i++){
        let $ = fibonacci(a[i]);
        b.push([i+1,a[i],$,countAssign,countCompare]);
        countAssign = 4; //before loop, we need 4 '=' for assigning
        countCompare = 1;
    }
    return b;
} 
//Cal on theory
cal_complexity = (a) =>{
    let n = a.length; 
    let b = []
    for (let i = 0; i<n; i++){
        b.push([i+1,a[i],a[i],a[i]*3] );
    }
    return b;
}
//let result = cal_complexity([5,7,9,12,15,18,25,30,40,45]);
//console.log(result);
let result = blackbox([5,7,9,12,15,18,25,30,40,45]);

console.log(result);
//console.log(fibonacci(4),countAssign,countCompare);

