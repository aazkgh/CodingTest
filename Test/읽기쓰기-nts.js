function solution(init, logs) {
  const curr = init;
  let queue = [];
  const answer = [];

  for (let log of logs) {
    if (log.startsWith("read")) {
      const [_, startTime, duration, ...rest] = log.split(" ");
      queue.push([Number(startTime) + Number(duration), ...rest]);
      queue.sort((a, b) => a[0] - b[0]);
    } else {
      const [_, startTime, duration, startIdx, endIdx, target] = log.split(" ");
      let time = startTime;
      while (queue.length > 0 && time <= startTime) {
        const [endTime, fIdx, lIdx] = queue.shift();

        if (endTime <= startTime) {
          const result = curr.slice(Number(fIdx), Number(lIdx) + 1);
          answer.push(result.join(""));
        } else {
          queue = [[endTime, Number(fIdx), Number(lIdx)], ...queue];

          for (let i = startIdx; i <= endIdx; i++) {
            curr[i] = Number(target);
          }

          time += Number(duration);
        }
      }
    }
  }

  while (queue.length) {
    const [_, fIdx, lIdx] = queue.shift();
    const result = curr.slice(fIdx, Number(lIdx) + 1);
    answer.push(result.join(""));
  }

  return answer;
}

console.log(
  solution(
    [1, 2, 4, 3, 3, 4, 1, 5],
    [
      "read 1 3 1 2",
      "read 2 6 4 7",
      "write 4 3 3 5 2",
      "read 5 2 2 5",
      "write 6 1 3 3 7",
      "read 9 1 0 7",
    ]
  )
);
