function solution(s) {
    let count = 0;
    let str = s.split('');
    
    do{
        let stack = [];
        let check = true;
        
        for(let char of str){
            if(char === '[' || char === '{' ||char === '('){
                stack.push(char);
            } else{
                let last = stack.pop();
                if((char === ']' && last !== '[')
                  || (char === '}' && last !== '{')
                  || (char === ')' && last !== '('))
                    check = false;
            }
        }

        if(stack.length) check = false;
        check && count++
        
        str.push(str.shift());
    } while(str.join('') !== s)
        
    return count;
}