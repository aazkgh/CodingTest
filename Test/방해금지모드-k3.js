function toMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
}

function toTimeString(minutes) {
    const h = String(Math.floor(minutes / 60) % 24).padStart(2, '0');
    const m = String(minutes % 60).padStart(2, '0');
    return `${h}:${m}`;
}

function isBlocked(t, ranges) {
    for (const [start, end] of ranges) {
        if (start <= end) {
            if (t >= start && t < end) return true;
        } else {
            // 자정 넘김: 두 구간
            if ((t >= start && t < 1440) || (t >= 0 && t < end)) return true;
        }
    }
    return false;
}

function solution(doNotDisturbRanges, notifyTime) {
    const notifyMin = toMinutes(notifyTime);
    const ranges = [];

    for (let range of doNotDisturbRanges) {
        const [startStr, endStr] = range.split("~");
        const start = toMinutes(startStr);
        const end = toMinutes(endStr);
        ranges.push([start, end]);
    }

    for (let i = 0; i < 1440; i++) {
        const t = (notifyMin + i) % 1440;
        if (!isBlocked(t, ranges)) {
            return toTimeString(t);
        }
    }

    return "impossible";
}

console.log(solution(["09:35~00:45"], "00:45")); //00:45
console.log(solution(["07:32~11:54", "10:32~14:54", "13:21~00:01", "22:10~05:25","04:10~09:12"], "04:16")); //impossible
console.log(solution(["20:11~00:41", "18:21~00:01"], "00:16")); //00:41
console.log(solution(["12:12~08:29", "14:12~19:46"], "04:26")); //08:29
console.log(solution(["20:11~00:41", "18:21~00:01"], "03:13")); //03:13