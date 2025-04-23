function solution(new_id) {
    //step1
    new_id = new_id.toLowerCase();
    
    //step2
    new_id = new_id.replace(/[^a-z0-9\-_.]/g, '');
    
    //step3
    while (new_id.includes('..')) {
        new_id = new_id.replace('..', '.');
    }
    
    //step4
    if(new_id.startsWith('.'))
        new_id = new_id.slice(1, new_id.length)
    if(new_id.endsWith('.'))
        new_id = new_id.slice(0, new_id.length - 1)
    
    //step5
    if(new_id == '')
        new_id = 'a'
    
    //step6
    if(new_id.length > 15) {
        new_id = new_id.slice(0, 15)
        
        if(new_id.endsWith('.'))
            new_id = new_id.slice(0, new_id.length - 1)
    }
    
    //step7
    if(new_id.length < 3) {
        const target = new_id[new_id.length - 1]
        for(let i=new_id.length; i<3; i++) {
            new_id = new_id + target
        }
    }
    
    return new_id;
}