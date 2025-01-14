function solution(s){
    let answer = true;

    const arrP = s.match(/p|P/g);
    const arrY = s.match(/y|Y/g);
    
    const lengP = arrP ? arrP.length : 0;
    const lengY = arrY ? arrY.length : 0;
    
    if(lengP !== lengY){
        answer = false;
    }

    return answer;
}