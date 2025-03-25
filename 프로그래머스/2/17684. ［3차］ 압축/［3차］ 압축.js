function solution(msg) {
    let dic = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let answer = [];
    
    for (let i = 0; i < msg.length; ) {
        let str = msg[i];
        let j = 1;

        while (dic.includes(str + msg[i + j])) {
            str += msg[i + j];
            j++;
        }
        dic.push(str + msg[i + j]);
        answer.push(dic.indexOf(str));

        i += str.length;
    }
    
    return answer;
}