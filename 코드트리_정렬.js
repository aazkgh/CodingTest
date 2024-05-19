const input = require("fs").readFileSync(0).toString().trim().split('\n');
const total = Number(input[0]);
const number = input[1].split(" ").map(Number);

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
            if (number[i]<number[minIdx]){
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

/* 기수 정렬 구현: 복습 */
const maxK = 6;
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

/* 병합 정렬 구현 */
function merge_sort(arr, low, high){
    let target = [];
    if(low < high){         
        const mid = Math.floor((low+high)/2);
        const arr1 = merge_sort(arr,low,mid);
        const arr2 = merge_sort(arr,mid+1,high);
        target = merge(arr1, arr2);
    }
    else target.push(arr[low]);
    
    return target;
}

function merge(lowArr, highArr){
    const newArr = [];
    let l = 0;
    let h = 0;
    while(l<lowArr.length && h<highArr.length){
        if(lowArr[l]<=highArr[h]){
            newArr.push(lowArr[l]);
            l++;
        }else{
            newArr.push(highArr[h]);
            h++;
        }
    }

    return newArr.concat(lowArr.slice(l)).concat(highArr.slice(h));
}

merge_sort(number, 0, number.length-1).join(" ");

/* 퀵 정렬 구현 */
function quick_divide(arr, low, high){
    const pivot = high;

    let i = low;
    let j = high-1; 
    while(i<=j){
        while(i<=j && arr[i]<=arr[pivot]) i++;
        while(i<=j && arr[j]>arr[pivot]) j--;

        if(i<j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}

function quick_sort(arr, low, high){
    if(low<high){
        const pos = quick_divide(arr,low,high);

        quick_sort(arr,low, pos-1);
        quick_sort(arr, pos+1, high);
    }
}

quick_sort(number, 0 , total-1)

