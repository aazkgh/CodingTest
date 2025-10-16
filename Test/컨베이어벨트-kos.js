function solution(conveyors, carriers) {
  const queue = [...conveyors];
  const count = new Array(carriers.length).fill(0);
  const found = new Array(carriers.length).fill(false);
  let pplIdx = 0;

  while (queue.length) {
    const [shape, size, color, id] = queue.shift();
    let hits = 0;
    if (shape === carriers[pplIdx][0]) {
      hits++;
    } else if (size === carriers[pplIdx][1]) {
      hits++;
    } else if (color === carriers[pplIdx][2]) {
      hits++;
    }

    if (hits >= 2) {
      found[pplIdx] = true;
    } else {
      count[pplIdx]++;
      queue.push([shape, size, color, id]);
      do {
        pplIdx = (pplIdx + 1) % carriers.length;
      } while (found[pplIdx]);
    }
  }

  return count;
}
