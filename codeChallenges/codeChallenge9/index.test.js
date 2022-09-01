/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:
Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/
/*i dont know the time complexity 
but if i had to guess it would be O(n^2) because of the recursion and arr methods*/
const nextBigger = function (num) {
    if (num.toString() === num.toString().split("").sort((a, b) => b - a).join("")) {
        return -1;
      }
      const m = num.toString().split("").sort((a, b) => b - a).join("");

      const incrementAndCheck = () => {
        num++;
        if (num.toString().split("").sort((a, b) => b - a).join("") == m) {
          return num;
        } else {
          incrementAndCheck();
        }
      }
      incrementAndCheck();
      return num;
    }

