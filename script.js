const maxNum = 100;
const minNum = 1;
let randomNum = Math.floor(Math.random() * (maxNum) - (minNum)) + minNum;

let attempts = 0 ;
let guess ;
let running = true;

while(running){
    guess = window.prompt(`enter number`);
    guess = Number(guess);
    console.log(typeof guess, guess);
    running:false;
}