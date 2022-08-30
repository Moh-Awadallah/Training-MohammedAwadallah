/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

/* time complexity for filter is O(n) */
 const bitCounting = (num) => {
        const arr = num.toString(2).split('')
        const countOfOne = arr.filter(num => num == 1).length;
        return countOfOne;
        
  };
  
  
  
  
  
  
  console.log(bitCounting(1234));