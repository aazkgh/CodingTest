const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const MOD = BigInt(1000000007);

const str = input[1].split('');

let a = 0n, c = 0n, g = 0n, t = 0n;

for (const char of str) {
    if (char === 'A') a++;
    else if (char === 'C') c++;
    else if (char === 'G') g++;
    else if (char === 'T') t++;
}

const result = (((a * c) % MOD) * ((g * t) % MOD)) % MOD;
console.log(result.toString());
