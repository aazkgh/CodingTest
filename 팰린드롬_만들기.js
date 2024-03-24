const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
//오름차순으로 문자 정렬
const input = require('fs').readFileSync(filePath).toString().trim().split('').sort();

const [head, body] = [[], []];
while (input.length) {
  //첫 요소 반환
  const first = input.shift();
  //같은 문자 있는지 없는지 검증
  const idx = input.indexOf(first);
  if (idx === -1) body.push(first);
  else {
    head.push(first);
    input.splice(idx, 1);
  }
}
const tail = [...head].reverse().join('');
if (body.length > 1) console.log("I'm Sorry Hansoo");
else console.log(head.join('') + body.join('') + tail);