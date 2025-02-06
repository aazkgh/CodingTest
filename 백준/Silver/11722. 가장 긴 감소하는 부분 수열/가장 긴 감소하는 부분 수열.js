const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', async function () {
  // 답안 작성
  let answer = '';
  let n = input[0];
  let arr = '1001 '+ input[1]
  arr = arr.split(' ')
  answer = max_decrease_array(n, arr);  
  console.log(answer)
  process.exit();
});

function max_decrease_array(n, arr){
  let dp = new Array(parseInt(n)+1).fill(0)
  for(let i=1;i<=n;i++){
    let max = 0;
    for(let j=0;j<i;j++){
      if(arr[j]*1 > arr[i]*1){
        max = Math.max(dp[j],max)
      }
    }
    dp[i] = max+1;
  }
  return Math.max(...dp)
}