const max = prompt("Enter max no :");
const random = Math.floor(Math.random()*max) + 1;
let guess = prompt ("guess the number :");

while(true){
    if(guess == "quit"){
        console.log("quitting game");
        break;
    }
    if(guess == random){
        console.log("You guessed correct");
        break;
    }
    else if ( guess > random){
        guess = prompt (" larger than random value ! guess again :");
    }
    else {
        guess = prompt (" smaller than random value ! guess again :");
    }

}