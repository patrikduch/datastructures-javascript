function checkPalindrome(term) {

    let left = 0;
    let right = term.length-1;


    while(left <= right) {

        if (term[left] != term[right]) {
            return false;
        }

        left++;
        right--;

    }


    return true;

}


const result = checkPalindrome("anna");
console.log(result);
