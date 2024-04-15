const alphabet = "abcdefghijklmnopqrstuvwxyz";
const lettersArr = alphabet.split("");
function giveLettersScore(){
    let lettersWithValues = [];
    for (let i = 0; i < lettersArr.length; i++){
        lettersWithValues.push(lettersArr[i]+i);
    }
    return lettersWithValues;
}

console.log(giveLettersScore());