let maxno = prompt("Enter maximum number to set Difficulty level : ");
console.log(`Now You have to guess a random generated number between 1 to ${maxno}`)
let go = "hare krishna";
let s1 = Math.random();
let s2 = s1*maxno;
let s3 = (Math.floor(s2) +1);

let guess = prompt (`Guess Random Generated Number by typing integer but first write ${go} to read rules :`);

for( chance=0; chance<=7; chance++){
    
    if(guess == "hare krishna"){
        console.log("Now read the rules. and press ctrl+R to actually start the game.");
        break;
    }

    if(guess == "quit"){
        console.log("Quitting the game.");
        console.log(`Correct answer is : ${s3}`);
        break;
    }
    else if ( guess == "h1"){
        console.log(`your no. is in range of ${s3-8} and ${s3+11}`);
    }
    else if ( guess == "h2"){
        console.log(`your no. is in range of ${s3-7} and ${s3+4}`);
    }

    if(guess == s3) {
        console.log(" You Guessed it Correct");
        console.log(`Correct answer is : ${s3}`);
        console.log('Congratulations ! Now you can chant ur hare krishna Mahamantra Round Attentively.')
        console.log("Now restart the game");
        break;
    }
    else{
        console.log("Oops! Try again . Do write only integers value for correct guess.");
    }
    guess = prompt ( "Guess Random Generated No. : ");

}