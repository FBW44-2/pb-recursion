function sum(n) {
    if (n === 1) {
        return n;
    } else {
        return sum(n - 1) + n;
    }
}

// console.log(sum(1)); // ➞ 1
// sum(1) -> 1

// console.log(sum(5)); // ➞ 15
// sum(5) -> 15
//     sum(4) + 5 -> 10 + 5
//         sum(3) + 4 -> 6 + 4
//             sum(2) + 3 -> 3 + 3
//                 sum(1) + 2 -> 1 + 2
//                      1

// console.log(sum(12)); // ➞ 78
