


const place = (num) => {
    num = 1;
    while (num < 101) {
        if (num % 10 === 1) {
            console.log(num + "st");
            num++;
        }
        if (num % 10 === 2) {
            console.log(num + "nd");
            num++;
        }
        if (num % 10 === 3) {
            console.log(num + "rd");
            num++;
        }
        else{
            console.log(num + "th");
            num++;
        }
        // divider = divider + 1;
        //if (num % 1 !== 0) break;
        //if (num / divider == 1) {
        //    return divider + "!";
    }
}

place();

