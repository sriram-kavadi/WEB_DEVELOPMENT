let randomNumber=Math.floor(Math.random()*6)+1;
while(true){
    let guessNumber=prompt("Guess the number: ");
    guessNumber=parseInt(guessNumber)
    if(guessNumber==randomNumber){
        alert("Your guess it right :)");
        break;
    }else{
        alert("Try again");
    }
}