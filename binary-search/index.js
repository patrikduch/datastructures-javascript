array = [1,2]

function binarySearch(value) {

    let left = 0;
    let right = array.length-1;

    while(left <= right) {
        const middle = Math.floor(left+right / 2);

        if (array[middle] == value) {
            return array[middle];
        } else if (array[middle] < value) {

            left = middle + 1;
        } else {

            right = middle -1;
        }
    }

    return null;
}


const result = binarySearch(1);

console.log(result);