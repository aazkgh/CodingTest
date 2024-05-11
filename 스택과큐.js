/* lv1.같은 숫자는 싫어 */
function solution(arr)
{
    const answer = [];
    //answer 배열에 마지막 값과 동일하다면 push하지 않기
    for(let i=0; i<arr.length; i++){
        if(answer[answer.length-1]!==arr[i])
            answer.push(arr[i]);
    }
    
    return answer;
}