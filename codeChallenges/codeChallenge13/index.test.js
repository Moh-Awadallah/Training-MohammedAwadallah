// ----------
// Day-15 : Mon 12 Sep - Code Challenge Number 13 - isSubsetOf
// ----------
/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */
/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/
// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function (target) {
  return this.every((element) => target.includes(element)); // 0(n) Return a boolean value as true if all the items apply the given condition, and false if not.
};



//* attemptin Extra Credit:

// const obj = {};
// target.forEach((current) => {
//   if (typeof current !== "object") {
//     obj[current] = 1;
//   } else if (Array.isArray(current)) {
//     obj[JSON.stringify(current)] = 1;
//   }
// });
// for (let ele of this) {
//   if (obj[ele] !== 1) return false;
// }
// return true;

