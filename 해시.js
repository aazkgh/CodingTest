//lv1.폰켓몬
function solution(num) {
    const phonkemon = new Set(num);
    
    const answer = phonkemon.size >= num.length / 2 ? num.length / 2 : phonkemon.size;
    return answer;
}

//1v1.완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for (let i = 0; i < completion.length; i++) {
      if (participant[i] !== completion[i]) {
          return participant[i];
      }
  }
  
  return participant[participant.length - 1];
}

//1v2.전화번호 목록
function solution(phone_book) {
  const hash = new Map();
  
  phone_book.forEach(number => {
      hash[number] = true;
  });
  
  for (let i = 0; i < phone_book.length; i++) {
      for (let j = 1; j < phone_book[i].length; j++) {
          const prefix = phone_book[i].substring(0, j);
          if (hash[prefix]) {
              return false;
          }
      }
  }
  
  return true;
}

//1v2.의상
function solution(clothes) {
  const hash = new Map();
  
  clothes.forEach(([_, type]) => {
    hash[type] = (hash[type] || 0) + 1;
  });
  
  let answer = 1;
  for (let key in hash) {
      answer *= (hash[key] + 1);
  }

  return answer - 1;
}

//lv3.베스트앨범 - 솔루션 참고
function solution(genres, plays) {
    const genreCountMap = new Map();
    const albums = genres.map((genre, idx) => ({
      genre,
      plays: plays[idx],
      idx,
    }));
  
    albums.forEach(({ genre, plays }) => {
      genreCountMap.set(genre, (genreCountMap.get(genre) || 0) + plays);
    });
  
    const sortedAlbums = albums.sort((a, b) => {
      if (a.genre !== b.genre)
        return genreCountMap.get(b.genre) - genreCountMap.get(a.genre);
      if (a.plays !== b.plays) return b.plays - a.plays;
      return a.idx - b.idx;
    });
  
    const selectedAlbums = new Map();
    const answer = [];
  
    sortedAlbums.forEach(({ genre, idx }) => {
      const albumCount = selectedAlbums.get(genre) || 0;
      if (albumCount < 2) {
        selectedAlbums.set(genre, albumCount + 1);
        answer.push(idx);
      }
    });
  
    return answer;
  }