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
  let max = -Infinity
  let second = -Infinity

  for (let i = 0; i < array.length; i++) {
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

