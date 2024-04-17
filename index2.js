const input = document.querySelector("#num");
const button = document.querySelector("button"); //ráhívunk a buttonra
const results = document.querySelector("#results");

const getVal = () => {
    return Number(input.value);
}

button.addEventListener('click', () => {
    const num = getVal();

    const li = document.createElement('li');
    results.append(li);

    if (num % 15 === 0){
       li.innerText = `${num}:FizzBuzz`;
    }
    else if (num % 3 === 0){
        li.innerText = `${num}:Fizz`;
    }
    else if (num % 5 === 0){
        li.innerText = `${num}:Buzz`;
    }
    else {
        li.innerText = num;
    }
});



