function solution(record) {
    let db = new Map();
    let result = []
    
    for(let i=0; i<record.length; i++){
        record[i] = record[i].split(' ');
        if(record[i][0] !== 'Leave')
            db.set(record[i][1], record[i][2]);
    }
    
    for(let data of record){
        if(data[0] === 'Change') continue;
        
        let msg = db.get(data[1]);
        
        if(data[0] === 'Enter'){
            result.push(msg + '님이 들어왔습니다.');
        } else { result.push(msg + '님이 나갔습니다.'); }
    }
    
    return result;
}