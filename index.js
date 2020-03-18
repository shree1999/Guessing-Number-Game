var btn = document.getElementById("check");
var restartButton = document.getElementById("restart");
restartButton.disabled = true;
var errorMessage = document.getElementById("errorMessage");
errorMessage.classList.remove("alert-danger");

var successMessage = document.getElementById("successMessage");
successMessage.classList.remove("alert-success");

var guessCount = 10;
var total_count = 0;
// generating random number.
const generateRandomNumber = () => {
    var num = Math.floor(Math.random() * 10 + 1);
    return num;
}
randomNumber = generateRandomNumber();

btn.addEventListener('click', () => {
    console.log(randomNumber);
    var userInputNumber = document.getElementById("number").value;
    userInputNumber = parseInt(userInputNumber);
    total_count = total_count + 1;
    guessCount = guessCount - 1;
    if(userInputNumber === randomNumber && total_count <= guessCount) {
        errorMessage.classList.remove("alert-danger");
        errorMessage.innerHTML = "";
        successMessage.classList.add("alert-success");
        total_count = total_count.toString();
        successMessage.innerHTML = "You Got it Correct in " + total_count + " guesses";
        btn.disabled = true;
        restartButton.disabled = false;
        restartButton.addEventListener('click', () => {
            window.location.reload();
        });
    } 
    else if(guessCount > 0) {
        errorMessage.classList.add("alert-danger");
        guess = guessCount.toString();
        errorMessage.innerHTML = "Wrong Guess!! You have " + guess + " left";
        guessCount = parseInt(guess);
    }
    else if(guessCount === 0) {
        errorMessage.innerHTML = "You have consumed all your guess please try again";
        btn.disabled = true;
        restartButton.disabled = false;
        restartButton.addEventListener('click', () => {
            window.location.reload();
        });
    }

});
