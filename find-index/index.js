function search(arr, n) {
    if (!arr.length) {
        return -1;
    } else {
        const num = arr.pop();

        if (num === n) {
            return arr.length;
        } else {
            return search(arr, n);
        }
    }
}

console.log(search([], 3)); // -1

console.log(search([1, 2, 3, 4], 3)); //2

console.log(search([2, 4, 6, 8, 10], 8)); //3

console.log(search([1, 3, 5, 7, 9], 11)); //-1

console.log(search([1, 5, 7, 11, 25, 100, 200, 350], 5)); //1