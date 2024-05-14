//lv1.폰켓몬
function solution(num) {
    const phonkemon = new Set(num);
    
    const answer = phonkemon.size >= num.length / 2 ? num.length / 2 : phonkemon.size;
    return answer;
}

//1v1.완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for (let i = 0; i < completion.length; i++) {
      if (participant[i] !== completion[i]) {
          return participant[i];
      }
  }
  
  return participant[participant.length - 1];
}

//1v2.전화번호 목록
function solution(phone_book) {
  let answer = true;
  
  phone_book.sort();
  for (let i =0; i<phone_book.length-1; i ++){
      if (phone_book[i+1].startsWith(phone_book[i])){
          answer = false;
          break;
      }
  }
  
  return answer;
}

//1v2.의상
function solution(clothes) {
  const hash = new Map();
  
  for(let i = 0; i< clothes.length; i++){
      if(hash.has(clothes[i][1])){
          const currentVal = hash.get(clothes[i][1]);
          hash.set(clothes[i][1], currentVal+1);
      } else {
          hash.set(clothes[i][1], 1);
      }
  }
  
  let answer = 1;
  for (const num of hash.values()) {
      answer *= num+1;
  }
  
  return answer - 1;
}