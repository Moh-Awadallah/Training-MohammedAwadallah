// ----------
// Day-18 : Wed 14 Sep - Code Challenge Number 14 - translateRomanNumeral
// ----------
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *00
 * You should return `null` on invalid input.
 */
const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const translateRomanNumeral = (romanNumeral) => {
  if (typeof romanNumeral !== "string") {
    return null;
  }
  let sum = 0;
  let i = 0;
  while (i < romanNumeral.length) {
    let key = romanNumeral[i];
    let value = DIGIT_VALUES[key];
    let nextKey = romanNumeral[i + 1];
    let nextValue = DIGIT_VALUES[nextKey];
    if (nextKey !== null && value < nextValue) {
      sum += nextValue - value;
      i += 2;
    } else {
      sum += value;
      i++;
    }
  }
  return sum;
};

//* Time Complexity is O(N) 
