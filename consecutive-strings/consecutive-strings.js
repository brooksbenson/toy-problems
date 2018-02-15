//returns the first longest occurence of n consecutive strings

function longestConsec(a, k) {
  let longest = '';
  for (let i = 0; k > 0 && i <= a.length - k; i++) {
    let cur = a.slice(i, i + k).join``;
    if (cur.length > longest.length) longest = cur;
  }
  return longest;
}

module.exports = longestConsec;