function fizz(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
        if(i % 5 === 0) {
            console.log("Buzz")
        }
        if(i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}

fizz(15)