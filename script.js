const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let angkaRahasia = Math.floor(Math.random() * 10) + 1;
let tebakanAngka;

mySubmit.onclick = function () {
    tebakanAngka = myText.value;
    tebakanAngka = Number(tebakanAngka);

    if (isNaN(tebakanAngka)) {
        resultElement.textContent = `Please enter a valid number between 1 and 10!`;
    }
    else if (tebakanAngka > 10)
    {
        resultElement.textContent = `Please enter a number 10 or less.`;
    }
    else if (tebakanAngka < 1)
    {
        resultElement.textContent = `Please enter a number 1 or greater.`;
    }
    else if (angkaRahasia > tebakanAngka) {
        resultElement.textContent = `Too low! Try a higher number.`;
    }
    else if (angkaRahasia < tebakanAngka) {
        resultElement.textContent = `Too high! Try a lower number.`;
    }
    else {
        resultElement.textContent = `Congrats! You guessed it right!`;
    }
}




