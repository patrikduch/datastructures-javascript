array = [1,2]

function binarySearch(array, target) {

  let left = 0;
  let right = array.length-1;

  while(left <= right) {

    const middle = Math.floor((left+right)/2);

    if (array[middle] == target) {
       return array[middle];
    } else if (target < array[middle]) {

      right = middle -1;
    } else {

      left = middle +1;
    }
  }

  return -1;
}

const result = binarySearch(array, 1);
console.log(result);