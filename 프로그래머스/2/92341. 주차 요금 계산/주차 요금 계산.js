function solution(fees, records) {
let [ basicTime, basicFee, unitTime, unitFee ] = fees;
let parkingLot = new Map();
let result = [];

    const timeConvert = (str) => {
        let [hours, minutes] = str.split(':').map(Number);
        return hours * 60 + minutes;
    };

    records.forEach((record) => {
        let [time, num, type] = record.split(' ');
        if (type === 'IN') {
            parkingLot.set(num, time);
        } else {
            let pastTime = timeConvert(parkingLot.get(num));
            let totalTime = timeConvert(time) - pastTime;

            result.push([num, totalTime]);
            parkingLot.delete(num);
        }
    });

    if (parkingLot.size > 0) {
        parkingLot.forEach((entryTime, num) => {
            let addTime = timeConvert('23:59') - timeConvert(entryTime);
            result.push([num, addTime]);
        });
    }

               
    result.sort((a, b) => a[0] - b[0]);
    let answer = [];

    result.forEach((val, idx) => {
        if(idx < result.length - 1 && val[0] === result[idx + 1][0] ){
            result[idx + 1][1] += val[1];   
        }
        else {
            val[1] <= basicTime ? answer.push(basicFee) : answer.push(basicFee + Math.ceil((val[1] - basicTime) / unitTime) * unitFee);
        }

    })
    
    return answer;
}