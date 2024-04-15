function getRandomNum(input) {
  let number = Math.floor(Math.random() * 10);
  if (input === number) {
    return true;
  } else {
    return false;
  }
}

console.log(getRandomNum(8));
