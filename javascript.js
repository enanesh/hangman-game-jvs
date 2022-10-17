
var wins = 0;
var losses = 0;
var userGuess = "";
var usedGuess = [];
var words = ["timer", "node", "cable", "computer", "code", "JavaScript", "variable", "patas",]
var fixedArray = [];
var alphabet = ["a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', z",];
var secondsLeft = 5;//keeps track of the seconds left in countdown
var leftLetter = 0;
var victoria = document.getElementById("wins");
victoria.textContent = "Wins: " + wins;

var perdedor = document.getElementById("loser");
perdedor.textContent = "Losses: " + losses;


// Creates a random selection from the words array
//var randomWord = words[Math.floor(Math.random() * words.length)];
var randomWord = "perro";
console.log(randomWord);

//Transfor the randomWord into "_" spaces

function game() {

    for (var i = 0; i < randomWord.length; i++) {
        fixedArray[i] = ("_");
    }

    console.log(fixedArray);

    var text = document.getElementById("grid-item1");

    text.innerHTML = fixedArray.join(" ");

    leftLetter = fixedArray.length;

    setTime();



}


function setTime() {
    var timerInterval = setInterval(function () {
        var time = document.getElementById("grid-item2");
        time.textContent = secondsLeft;


        if (secondsLeft === 0) {
            losses = losses + 1;
            perdedor.textContent = "Losses: " + losses;

            clearInterval(timerInterval);

        }
        secondsLeft--;



    }, 1000);

}

function userpress(event) {
    console.log(event);

    userGuess = event.key;


    // Me dice en que lugar estan las letras que agrego el usuario


    const indexes = [];

    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === userGuess) {
            indexes.push(i);
        }

    }

    //compara el input del usuario 
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord === userGuess) {
            indexes.push(i);
            console.log("You bfejkafbkauebfkuebfuyea!");

            wins = wins + 1;

            victoria.textContent = "Wins: " + wins;

            return;

        }

    }

    if (fixedArray.includes(userGuess)) {
        console.log("used letter")
    }
    // te dice si tu letra no esta en la plabra 
    else if (indexes.length == 0) {
        console.log("That letter is not present");
    }
    else {
        leftLetter = leftLetter - indexes.length;

        console.log(indexes); // 👉️ [2, 4, 9]

        //descubre las letras que ingresa el usuario

        for (let j = 0; j < indexes.length; j++) {
            fixedArray[indexes[j]] = userGuess;
        }

        var texto = document.getElementById("grid-item1");

        texto.innerHTML = fixedArray.join(" ");

    }


    if (leftLetter == 0) {
        console.log("You abcde");
        wins = wins + 1;

        victoria.textContent = "Wins: " + wins;
    }


}

window.addEventListener("keypress", userpress);

