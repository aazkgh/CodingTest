function solution(question, searches, n) {
  let answer = [];
  let target = new Set(question);
  const selected = new Array(searches.length).fill(false);
  const result = Array.from({ length: searches.length }, () => [0, []]);

  while (answer.length < n) {
    for (let i = 0; i < searches.length; i++) {
      if (!selected[i]) {
        const total = new Set([...target, ...searches[i]]);

        let count = 0;
        for (let word of searches[i]) {
          if (target.has(word)) {
            count++;
          }
        }

        if (!answer.length) {
          result[i][0] = count / total.size;
        } else {
          result[i][1].push(count / total.size);
        }
      }
    }

    let max = -Infinity;
    let idx = -1;
    for (let i = 0; i < result.length; i++) {
      if (!selected[i]) {
        let ratio = result[i][0] - Math.max(0, ...result[i][1]);
        if (max < ratio) {
          max = ratio;
          idx = i;
        }
      }
    }

    selected[idx] = true;
    target = new Set(searches[idx]);
    answer.push(idx + 1);
  }

  return answer;
}

console.log(
  solution(
    ["programmers", "take", "coding", "test", "at", "programmers"],
    [
      ["coding", "tests", "with", "programmers"],
      ["assigned", "tests", "with", "programmers"],
    ],
    1
  )
);
