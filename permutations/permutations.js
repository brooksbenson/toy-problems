/*
  A set of things can be ordered or arranged 
  a finite number of ways. A permutation is 
  one of the possible arrangements of a set.

  The permutations function defines a string as its
  parameter and returns every unique permutation
  of that string stored in an array.
*/

function permutations(s) {
  let perms = new Set();
  
  (function build(perm, set) {
    if (perm.length === s.length) {
      perms.add(perm);
      return;
    }
    set.forEach((c, i) => {
      let newSet = [...set];
      newSet.splice(i, 1);
      build(perm + c, newSet);
    });
  })('', [...s]);
  
  return [...perms];
}