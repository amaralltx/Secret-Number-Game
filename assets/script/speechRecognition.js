
export default function catchSpeech(guess,  validateSpeechNumber, ruleNumbers){

    window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
    
    const recognition = new SpeechRecognition();
    recognition.lang = "pt-Br";
    recognition.start();
    
    recognition.addEventListener('result', e => {
        
        const speakedNumber =  e.results[0][0].transcript;
        const returnMessege = validateSpeechNumber(speakedNumber , ruleNumbers);
        showGuess(speakedNumber, guess, returnMessege);
        
    })

    recognition.addEventListener('end', e => recognition.start());
}

function showGuess(speakedNumber, guess, returnMessege){
    guess.innerHTML = `
        <div>Você disse</div>
        <span class="box">${speakedNumber}</span>
        <div>${returnMessege}</div>
        <i id="reloadGame" class="fa-solid fa-rotate-right"></i>
    `
    if(returnMessege.includes('Parabéns')){
        document.querySelector("#reloadGame").style.display = "block";
    }
}

