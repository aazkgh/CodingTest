const input = require("fs").readFileSync(0).toString().trim().split('\n');
const total = Number(input[0]);
const number = input[1].split(" ");

/* 거품 정렬 구현 */
function bubble_sort(total, number){
    for(let j=0; j<total-1; j++){
        for(let i=0; i<total-1-j; i++){
            if (Number(number[i])>Number(number[i+1])){
                const temp = number[i+1];
                number[i+1] = number[i];
                number[i] = temp;
            }
        }
    }
    return number.join(" ");
}

/* 선택 정렬 구현 */
function selection_sort(total, number){
    for(let j=0; j<total-1; j++){
        let minIdx = j;
        for(let i=j+1; i<total; i++){
            if (Number(number[i])<Number(number[minIdx])){
                minIdx = i;
            }
        }
        const temp = number[j];
        number[j] = number[minIdx];
        number[minIdx] = temp;
    }
    return number.join(" ");
}

/* 삽입 정렬 구현 */
function insertion_sort(total, number){
    for (let i = 1; i < total; i++) {
        const key = number[i];
        for (let j = i-1; j>= 0; j--) {
            if(number[j] > key)
                number[j + 1] = number[j]; 
        }
        number[j+1] = key;
    }
    return number.join(" ");
}

/* 기수 정렬 구현 */
const maxK = 6; // 최대 자릿수
const maxDigit = 10; // 0부터 9까지의 숫자

function radix_sort(number){
    let answer = number; // 초기 배열을 answer로 설정
    for (let i = 0; i < maxK; i++) {
        const storageArr = Array.from({length: maxDigit}, () => []); // 각 숫자(0~9)에 해당하는 버킷을 배열로 초기화
        answer.forEach((element) => {
            const digit = Math.floor(element / Math.pow(10, i)) % maxDigit; // i번째 자릿수 추출
            storageArr[digit].push(element); // 해당 자릿수에 맞는 버킷에 숫자 삽입
        });

        answer = []; // answer 초기화
        storageArr.forEach(bucket => {
            answer = answer.concat(bucket); // 버킷 순서대로 answer 배열 재구성
        });
    }
    return answer; // 정렬된 배열 반환
}


console.log(radix_sort(total,number));

