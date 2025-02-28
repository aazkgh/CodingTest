const fs = require('fs');
const dwarfs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for(let i=0; i<dwarfs.length; i++){
    for(let j=i+1; j<dwarfs.length; j++){
        let result = dwarfs.reduce((sum, curr, index) => {
            if(j !== index && i !== index) sum += curr;
            return sum;
        },0)
        
        if(result === 100){
            dwarfs.splice(j, 1); 
            dwarfs.splice(i, 1);            
            
            dwarfs.sort((a,b) => a - b);
            dwarfs.forEach((p) => console.log(p));
            return;
        }
    }
}