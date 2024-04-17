function fizzBuzz(number) {
    if (number % 3 === 0) {
      console.log("Fizz!");
    }
    if (number % 5 === 0) {
      console.log("Buzz!");
    }
    if (number % 15 === 0) {
      console.log("Fizz Buzz!");
    }
  }

  console.log(fizzBuzz(15));