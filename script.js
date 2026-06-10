const maxNum = 100;
const minNum = 1;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`enter a number between ${minNum} and ${maxNum} `);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Enter a valid Number");
    }

    else if (guess < minNum || guess > maxNum) {
        window.alert("Enter a valid Number");
    }

    else {
        attempts++;

        if (guess > answer) {
            window.alert("YOUR ANSWER IS TOO big !! TRY AGAIN");
        }
        else if (guess < answer) {
            window.alert("YOUR ANSWER IS TOO LOW !! TRY AGAIN");
        }
        else {
            window.alert(
                `CONGRATS, THE ANSWER WAS ${answer}, IT TOOK YOU ${attempts} TO GUESS CORRECTLY`
            );
            running = false;
        }
    }
}