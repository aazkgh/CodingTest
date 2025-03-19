function solution(s) {
    let zero = 0;
    let loop = 0;

    while (s !== '1') {
        let lengthBefore = s.length;

        s = s.replace(/0/g, '');

        let lengthAfter = s.length;
        zero += lengthBefore - lengthAfter;

        s = lengthAfter.toString(2);
        loop++;
    }

    return [loop, zero];
}
