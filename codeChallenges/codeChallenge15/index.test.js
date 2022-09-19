/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */
/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

const allAnagrams = function (string) {
  let length = string.length;
  let array = string.split("");
  console.log(array);
  let newArray = [];
  const getOne = (arr) => {
    if (arr.length === length) {
      newArray.push(arr.join(""));
      return;
    }
    array.forEach((element) => {
      if (arr.indexOf(element) === -1) {
        getOne(arr.concat(element));
      }
    });
  };
  getOne([]);
  return newArray;
};

describe("Tests", () => {
  it("test all anagrams", () => {
    expect(allAnagrams("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
});

/* time complexity is O(n) */