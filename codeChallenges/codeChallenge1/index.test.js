
/**
 * Given a single input array, write a function that outputs an unique array of values
 *
 *
 * What time complexity is your solution?
 * 
 *  the time complexity is the number of times you iterate through the input array so O(n)
 *
 * Your solution shouldn't using any build in function.
 *
 * Credit: Write a unit tests.
 */
/**
  * example usage:
  * const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
  * console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
  */
const arrOfNum = [1, 2, 2, 4, 5, 6, 6]
const getUniqueValues = (arrOfNum) => {
  let arr = []  // create an empty array
  for (let i = 0, l = arrOfNum.length;i < l;i++) // iterate through
    if (arr.indexOf(arrOfNum[i]) === -1) // using indexOf we check if the number is in the new array
      arr.push(arrOfNum[i]) // if not then we push it
  return arr // reutn the array
}

describe("Tests", () => {
  it("test unique values", () => {
    expect(getUniqueValues(arrOfNum)).toEqual([1, 2, 4, 5, 6])
  })
})
