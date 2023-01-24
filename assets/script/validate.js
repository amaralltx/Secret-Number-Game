export default function validateSpeechNumber(guess, ruleNumbers){

    const userGuess = guess.replace(/\./g, "");
    

    if(invalidGuess(userGuess)){
        return `Valor inválido, apenas números são aceitos`;
    } else if (invalidGuessRange(userGuess, ruleNumbers)){
        return `Número fora do range, o número secreto está entre ${ruleNumbers.minValue} e ${ruleNumbers.maxValue}`;
    } else if (userGuess == ruleNumbers.secretNumber){
        return 'Parabéns você acertou <i class="fa-solid fa-check"></i>';
    } else if (itsHigher(userGuess, ruleNumbers)){
        return 'O número é maior <i class="fa-solid fa-up-long"></i>'
    } else {
        return 'O número é menor <i class="fa-solid fa-down-long"></i>'
    }
}

function invalidGuess(guess) {
    return Number.isNaN(guess);
}

function invalidGuessRange(guess, ruleNumbers){
    return guess < ruleNumbers.minValue || guess >  ruleNumbers.maxValue;
}

function itsHigher(guess, ruleNumbers){
    return guess < ruleNumbers.secretNumber;
}
