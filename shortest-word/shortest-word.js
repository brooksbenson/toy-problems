//given a string of words, return the shortest word
const findShort = s => Math.min(...s.split(' ').map(({length}) => length));