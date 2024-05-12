/* 정수 명령 처리 */
const input1 = require("fs").readFileSync(0).toString().trim().split('\n');

const num = Number(input1[0]);
const stack1 = [];

for(let i=0; i<=num; i++){
    if (input1[i].startsWith("push")){
        const newValue = Number(input1[i].split(" ")[1]);
        stack1.push(newValue);
    }
    else if (input1[i].startsWith("pop")){
        const target = stack1.pop();
        console.log(target);
    }
    else if (input1[i].startsWith("size")){
        console.log(stack1.length);
    }
    else if (input1[i].startsWith("empty")){
        stack1.length ? console.log(0) : console.log(1);
    }
    else if (input1[i].startsWith("top")){
        console.log(stack1[stack1.length-1]);
    }
}

/* 괄호 문자열의 적합성 판단 */
const input2 = require("fs").readFileSync(0).toString().trim().split('\n');

const str = input2[0];
const stack2 = [];

for(let i=0; i<str.length; i++){
    if(str[i]==='(')
        stack2.push(str[i]);
    else if(str[i]===')'){
        if(stack2.length)
            stack2.pop()
        else{
            console.log('No');
            return false;
        }
    }   
}

stack2.length ? console.log('No') : console.log('Yes');
