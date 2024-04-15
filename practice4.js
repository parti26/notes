function getRandomNum(input, input2, input3) {
  let number = Math.floor(Math.random() * 10);
  if (input === number) {
    return "Yaay you got it";
  } else if (input2 === number) {
    return "Got me there";
  } else if (input3 === number) {
    return "Good job";
  } else {
    return "Pathetic";
  }
}

console.log(getRandomNum(4, 6, 8));
