
var wins = "";
var losses = "";
var userGuess = "";
var usedGuess = [];
var words = ["timer", "node", "cable", "computer", "code", "JavaScript", "variable", "patas",]
var fixedArray = [];
var alphabet = ["a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', z",];
var secondsLeft = 20;//keeps track of the seconds left in countdown

//Creates a random selection from the words array
//var randomWord = words[Math.floor(Math.random() * words.length)];
var randomWord = "perro";
console.log(randomWord);

//Transfor the randomWord into "_" spaces

function game() {
   

        for (var i = 0; i < randomWord.length; i++) {
            fixedArray[i] = ("_");
        }

        console.log(fixedArray);

        alert(fixedArray.join(" "));




        var leftLetter = fixedArray.length;




        while (leftLetter > 0) {


            userGuess = prompt("Type a letter");




            console.log(userGuess);



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
                    alert("You won!");
                    wins = wins + 1;
                    return;

                }

            }

            if (fixedArray.includes(userGuess)) {
                alert("used letter")
            }
            // te dice si tu letra no esta en la plabra 
            else if (indexes.length == 0) {
                alert("That letter is not present");
            }
            else {
                leftLetter = leftLetter - indexes.length;

                console.log(indexes); // 👉️ [2, 4, 9]

                //descubre las letras que ingresa el usuario

                for (let j = 0; j < indexes.length; j++) {
                    fixedArray[indexes[j]] = userGuess;
                }
                alert(fixedArray.join(" "));
            }
        

        
        
       
            if (leftLetter == 0) {
                alert("You won");
                wins = wins + 1;
            }
        }
}

    
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft == 0) {
            
        }
    
    }, 1000);

}


