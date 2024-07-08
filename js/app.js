console.log('FOR LOOP');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

        //multipli di 3 = Fizz
    } else if (i % 3 === 0) {
        console.log("Fizz");

        //multipli di 5 = Buzz
    } else if (i % 5 === 0) {
        console.log("Buzz");

        //multipli di 3&5 = FizzBuzz
    } else {
        console.log(i);
    }
}
