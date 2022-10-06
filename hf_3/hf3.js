//constants
const input = document.querySelector('#input');
const charsOut = document.querySelector('#chars');
const riddleOut = document.querySelector('#riddle');
const restart = document.querySelector("#restart");
const win = document.querySelector("#win");
const sq = "▢";
const vowels = "aeiou";
const riddles = [
    "impound",
    "tribute",
    "evolution",
    "presentation",
    "discriminate",
    "river",
    "opposite",
    "spokesperson",
    "dinner",
    "stretch"
];
//variables
let characters;
let riddle;
let riddleLength;
let guessedLetters;
let squares;
let letters = [];

//start a new game when the page refreshes
riddleGenerator();

//eventlisteners
riddleOut.addEventListener('click', (event) => {
    if(vowels.includes(riddle[letters.indexOf(event.target)]) && letters[letters.indexOf(event.target)].classList.contains("letter")){
        alert("It's a vowel");
    }else if(letters[letters.indexOf(event.target)].classList.contains("letter")){
        alert("It's a consonant")
    }
});

input.addEventListener('keydown',(event) => {
    if(alphaChar(event.keyCode)){
        addToSet(event.key);
    }
    input.value = '';

    writeCharacters();

    if(riddle.includes(event.key)){
        let guessedLetter = riddle[riddle.indexOf(event.key)];
        let i = 0;
        [...riddle].map((currentLetter) => {
            if(currentLetter == guessedLetter && letters[i].innerHTML == sq){
                letters[i].classList.remove("letter");
                letters[i].innerHTML = guessedLetter;
                guessedLetters++;
            }
            i++;
        });
    }

    if(guessedLetters == riddleLength){
        restart.hidden = false;
        win.hidden = false;
    }
});

input.addEventListener('keyup',() => {input.value = '';});

restart.addEventListener('click', () =>{
    riddleGenerator();
});

//functions
function riddleGenerator(){
    restart.hidden = true;
    win.hidden = true;
    riddle = riddles[getRandomNumber()];
    characters = [];
    riddleLength = riddle.length;
    squares = "";
    guessedLetters = 0;
    charsOut.innerHTML = "";

    for(let i = 0; i < riddleLength; i++){
        squares += (`<span class="letter">`+sq+"</span>");
    }
    riddleOut.innerHTML = squares;
    letters = [...(document.querySelectorAll(".letter"))];
}

function writeCharacters(){
    characters.sort();
    let str = "";

    characters.map(char => str+=(char + ' '));

    charsOut.innerHTML = str;
}

function addToSet(char){
    if(!(characters.includes(char.toLowerCase()))){
        characters.push(char.toLowerCase());
    }
}

function alphaChar(key) {
    return ((key >= 65 && key <= 90));
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}