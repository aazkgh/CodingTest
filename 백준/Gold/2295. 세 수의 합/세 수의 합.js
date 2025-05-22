let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
const N = input.shift();
const xySet = new Set();
input = input.sort((a, b) => a - b);
for (let i = 0; i < N - 1; i++) {
	for (let j = 0; j < N - 1; j++) {
		const x = input[i];
		const y = input[j];
		xySet.add(x + y);
	}
}

const xyArr = [...xySet].sort((a, b) => a - b);
for (let i = N - 1; i > 0; i--) {
	for (let j = 0; j <= i; j++) {
		const k = input[i];
		const z = input[j];
		const target = k - z;
		let left = 0;
		let right = xyArr.length - 1;
		while (left <= right) {
			const mid = Math.floor((right + left) / 2);

			const maybe = xyArr[mid];
			if (target == maybe) {
				console.log(k);
				process.exit();
			} else {
				if (target < maybe) {
					right = mid - 1;
				} else {
					left = mid + 1;
				}
			}
		}
	}
}