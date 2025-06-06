function solution(arr) {
    let target = new Array(arr.length).fill(0);
    let success = new Array(arr.length).fill(false);

    let count = 0;
    let start = 0;

    while(success.includes(false)) {
        for(let i = 0; i < target.length; i++) {
            if(target[i] === arr[i]) {
                success[i] = true;
            }
        }

        if(!success.includes(false)) {
            break;
        }

        for(let i = 0; i < target.length; i++) {
            if(success[i] === false) {
                start = i;
                break;
            }
        }

        let end = start;
        for(let i = start + 1; i < target.length; i++) {
            if(success[i] === true) {
                break;
            }

            end = i;
        }

        let curr = arr.slice(start, end + 1);
        let min = Math.min(...curr);
        for(let i = start; i <= end; i++) {
            target[i] = min;
        }

        count++;
    }

    return count;
}


console.log(solution([3, 4, 4])); // 2
console.log(solution([3, 1, 4])); // 3
console.log(solution([0, 0, 0])); // 0
console.log(solution([1, 2, 3])); // 3
