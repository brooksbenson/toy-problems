/*
  A set or number of things can be ordered or arranged 
  a finite number of ways. A permutation is one of the
  possible arrangements of a set.

  The permutations function defines a string as its
  parameter and returns every unique permutation
  of that string.
*/

function permutations(s) {
  return function build(set, perms) {
    if (set.length === 0) return perms; 
    set.forEach((c, i) => {
      let root = !perms.length ? [c] : [...perms];
      let newSet = [...set].splice(i, 1);
    });
  }([...s], []);
}