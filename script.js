'use strict';

let generateRandomNumber= ()=>{
    return Math.trunc(Math.random()*20 +1);
}
let actualNumber = generateRandomNumber();

let Score = parseInt(document.getElementsByClassName('score')[0].innerHTML);
let HighestScore = parseInt(document.getElementsByClassName('highscore')[0].innerHTML); 
// let message = document.getElementsByClassName('message')[0].innerHTML;
// let actualNumberDiv;

let EqualCheck = () =>{
    let numberEntered = parseInt(document.getElementById('number').value);
    if(actualNumber == numberEntered){
        document.getElementsByClassName('message')[0].innerHTML = 'Correct 🥳🎉🎇'
        document.getElementById('actualNumber').innerHTML = actualNumber;
        if(HighestScore < Score) document.getElementsByClassName('highscore')[0].innerHTML = Score;
        document.body.style.backgroundColor = "green";
        document.getElementById('check').disabled = true;
        document.getElementById('check').style.backgroundColor = 'gray';
    }
    else{
        Score = Score - 1;
        document.getElementsByClassName('score')[0].innerHTML = Score;
        actualNumber > numberEntered ? document.getElementsByClassName('message')[0].innerHTML = 'Too Low!' : document.getElementsByClassName('message')[0].innerHTML = 'Too High!';
    }
}

document.querySelector('.check').addEventListener('click', EqualCheck);
document.querySelector('.again').addEventListener('click', playAgain);

let playAgain = () =>{
    document.getElementsByClassName('score')[0].innerHTML= 20;
    Score = 20;
    document.getElementById('actualNumber').innerHTML = '?'
    document.getElementsByClassName('message')[0].innerHTML = 'Start guessing...';
    document.body.style.backgroundColor = "black ";
    document.getElementById('number').value = '';
    HighestScore = parseInt(document.getElementsByClassName('highscore')[0].innerHTML);
    document.getElementById('check').disabled = false;
    document.getElementById('check').style.backgroundColor = 'white';
    actualNumber = generateRandomNumber();

}




//Properties
//Score, HighestScore, generateRandomNumberBetwn1-20
