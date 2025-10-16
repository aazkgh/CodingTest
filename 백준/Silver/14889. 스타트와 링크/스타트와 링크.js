const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const costs = Array.from({ length: N }, () => Array(N).fill(0));
for(let i = 0; i < N; i++) {
    const col = input[i + 1].split(' ').map(Number);
    for(let j = 0; j < N; j++) {
        costs[i][j] = col[j];
    }
}

// 스타트 팀: true, 링크 팀: false
let people = new Array(N).fill(true);
let startTeamScore = 0;
let linkTeamScore = 0;  

for (let i = 0; i < N / 2; i++) {
    people[i] = true; 
}
for (let i = N / 2; i < N; i++) {
    people[i] = false;
}

let min = Infinity; 
const backtracking = (idx, selectCount) => {
    if (selectCount === N / 2) {
        let currentStartTeamScore = 0;
        let currentLinkTeamScore = 0;

        const startTeamMembers = [];
        const linkTeamMembers = [];

        for (let k = 0; k < N; k++) {
            if (people[k]) {
                startTeamMembers.push(k);
            } else {
                linkTeamMembers.push(k);
            }
        }

        for (let i = 0; i < N / 2; i++) {
            for (let j = i + 1; j < N / 2; j++) {
                currentStartTeamScore += costs[startTeamMembers[i]][startTeamMembers[j]];
                currentStartTeamScore += costs[startTeamMembers[j]][startTeamMembers[i]];
            }
        }
        for (let i = 0; i < N / 2; i++) {
            for (let j = i + 1; j < N / 2; j++) {
                currentLinkTeamScore += costs[linkTeamMembers[i]][linkTeamMembers[j]];
                currentLinkTeamScore += costs[linkTeamMembers[j]][linkTeamMembers[i]];
            }
        }
        
        min = Math.min(min, Math.abs(currentStartTeamScore - currentLinkTeamScore));
        return;
    }

    if (idx === N) {
        return;
    }

    people[idx] = true;
    backtracking(idx + 1, selectCount + 1);

    people[idx] = false;
    backtracking(idx + 1, selectCount);
};

backtracking(0, 0);

console.log(min);