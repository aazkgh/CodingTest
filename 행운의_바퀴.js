const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [wheelNum, rotateNum] = input[0].split(' ').map(Number);
const wheel = new Array(wheelNum);

let arrow_point = 0;
let result = true;

for (let i = 1; i <= rotateNum ; i++){
    let [move, alphabet] = input[i].split(' ');
    let isExist = wheel.includes(alphabet);

    arrow_point =(arrow_point + Number(move)) % wheelNum;

    if (isExist){
        if (wheel[arrow_point] !== alphabet){ 
            result = false; 
            console.log('!');
            break;
        }
    }
    else{
        if (!wheel[arrow_point]){ 
            wheel[arrow_point] = alphabet;        
        }
        else{
            result = false; 
            console.log('!');
            break;
        }
    };
    
    if (result && i === rotateNum){
        let idx = wheel.indexOf(alphabet);
        const result = [];
        
        for (let j = 0; j < wheelNum; j++){
            wheel[idx] ? result.push(wheel[idx]) : result.push('?');
            
            idx = (idx-1+wheelNum) % wheelNum;
        }
        console.log(result.join(''));
    } 
}

