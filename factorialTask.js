
const reverseFactorial = (num) => {
    let divider = 1;

    while (num > 1) {
        // num = num / divider;
        num /= divider;
        // divider = divider + 1;
        if (num % 1 !== 0) break;
        divider++;
        if (num / divider == 1) {
            return divider + "!";
        }
    }
    return "NONE"
}

console.log(reverseFactorial(150));

module.exports = reverseFactorial;

// //let fact;
// //for (let i = 1; i < 2_100_000_000; i++) {
//     fact = reverseFactorial(i);
//     if (fact !== "NONE") console.log("RF", i, "=", fact);
// }

