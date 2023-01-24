import sortRandomNumber from "./sortNumber.js"
import validateSpeechNumber from "./validate.js";
import catchSpeech from "./speechRecognition.js";

const minValue = 10;
const maxValue = 5000;
let randomNumber = sortRandomNumber(minValue, maxValue);
console.log(randomNumber);

let ruleNumbers = {
    minValue: minValue,
    maxValue: maxValue,
    secretNumber: randomNumber
}

const $elementMinValue = document.querySelector("#min-value");
const $elementMaxValue = document.querySelector("#max-value");

$elementMinValue.innerHTML = ruleNumbers.minValue;
$elementMaxValue.innerHTML =  ruleNumbers.maxValue;

const $guess = document.querySelector('#guess');

catchSpeech($guess, validateSpeechNumber, ruleNumbers);

document.querySelector("#reloadGame").addEventListener("click", e => {
    window.location.reload();
})
