function solution(n) {
    const f = [0, 1];
    
    for(let i= 2; i<=n; i++) {
        let val = (f[i - 1] + f[i -2]) % 1234567
        f.push(val);
    }
 
    return f[n] % 1234567;
}