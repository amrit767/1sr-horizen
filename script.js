const maxNum = 100;
const minNum = 1;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const input = document.querySelector(".myInput");
const button = document.querySelector(".myBtn");
const stdout = document.querySelector("#stdout");
const conclusion = document.querySelector("#conclusion-label");
const history = document.querySelector{ "#history"}

let attempts = 0;
let guesses = [];

button.onclick = function () {
    let guess = Number(input.value);

    if (input.value === "") {
        stdout.textContent = "STDOUT: NO INPUT";
        conclusion.textContent = "PLEASE ENTER A NUMBER";
        return;
    }

    if (isNaN(guess)) {
        stdout.textContent = "STDOUT: INVALID INPUT";
        conclusion.textContent = "ENTER A VALID NUMBER";
        return;
    }

    if (guess < minNum || guess > maxNum) {
        stdout.textContent = "STDOUT: OUT OF RANGE";
        conclusion.textContent = ` ENTER A NUMBER BETWEEN ${minNum} AND ${maxNum} `;
        input.value = "";
        return;

    }


    if (guess > answer) {
        stdout.textContent = `STDOUT: ATTEMPT ${attempts}`;
        conclusion.textContent = `${guess} IS TOO HIGH`;
        guesses.push(
            `attempts ${attempts}: ${guess} > TOO HIGH`
        );
        history.innerHTML = guesses.join("<br>");
        input.value = "";

    }
    else if (guess < answer) {

        stdout.textContent = `STDOUT ATTEMPT ${attempts}`;
        conclusion.textContent = `${guess} IS TOO HIGH`;
        guesses.push(
            `attempts ${attempts}: ${guess} > TOO LOW`
        );
        history.innerHTML = guesses.join("<br>");
        input.value = "";
    }
    else {

        stdout.textContent = `STDOUT ATTEMPT ${attempts}`;
        conclusion.textContent = `${guess} IS THE CORRECT ANSWER`;
        guesses.push(
            `attempts ${attempts}: ${guess} > CORRECT`
        );
        history.innerHTML = guesses.join("<br>");
        setTimeout(newGame, 3000);



    }
};

function newGame(){
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0 ;
    guesses = [] ;
    history.innerHTML = "NEW ROUND STARTED" ;
    stdout.textContent = "STDOUT: WAITING...";
    conclusion.textContent = "CONCLUSION OF YOUR GUESS";
    input.value = "";
    input.disabled = false;
    button.disabled = false;

}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});

console.log("ANSWER = " , answer);