/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:
Note : using sort native is not allowed
Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/

/*time Complexity O(N)*/
const secondMax = function (array) {
  let max = array[0];
  let second = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      second = max;
      max = array[i];
      continue;
    }

    if (array[i] > second && array[i] < max) {
      second = array[i];
    }
  }

  return second;
};

console.log(secondMax([-1, -5, 2]));
