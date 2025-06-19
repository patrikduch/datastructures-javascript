const array = [1,2,3,4]

function sequentialSearch(value) {

    for (let i in array) {

        if (array[i] == value) {
            return array[i];
        }

    }
}

const value = sequentialSearch(2);
console.log(value);