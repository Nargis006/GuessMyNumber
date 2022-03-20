'use strict';

let generateRandomNumber= ()=>{
    return Math.trunc(Math.random()*20 +1);
}
let actualNumber = generateRandomNumber();

const assignValueToElements = (value, cssClassName) => {
    document.querySelector('.'+ cssClassName).innerHTML = value;
}

let Score = parseInt(document.getElementsByClassName('score')[0].innerHTML);
let HighestScore = parseInt(document.getElementsByClassName('highscore')[0].innerHTML);

let EqualCheck = () =>{
    let numberEntered = parseInt(document.getElementById('number').value);
    if(!numberEntered || numberEntered > 20){
        assignValueToElements('Not a valid input ☹️','message');
    }

    else if(actualNumber == numberEntered){
        assignValueToElements('Correct 🥳🎉🎇','message');
        assignValueToElements(actualNumber,'number');
        document.body.style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem';
        document.getElementById('check').disabled = true;
        document.getElementById('check').style.backgroundColor = 'gray';

        if(HighestScore < Score) assignValueToElements(Score, 'highscore');
    }

    else if(Score == 1){
        assignValueToElements('😝 You lost the game, click Again!','message');
        Score = Score - 1;
        assignValueToElements(Score,'score');
        document.getElementById('check').disabled = true;
        document.getElementById('check').style.backgroundColor = 'gray';
        document.body.style.backgroundColor = "Red";
    }
        
    else{
        Score = Score - 1;
        assignValueToElements(Score,'score');
        actualNumber > numberEntered ? assignValueToElements('Too Low!','message') : assignValueToElements('Too High!','message');
    }
}

let playAgain = () =>{
    assignValueToElements(20,'score');
    Score = 20;
    assignValueToElements('?','number');
    assignValueToElements('Start guessing...','message');
    document.body.style.backgroundColor = "black ";
    document.getElementById('number').value = '';
    HighestScore = parseInt(document.getElementsByClassName('highscore')[0].innerHTML);
    document.getElementById('check').disabled = false;
    document.getElementById('check').style.backgroundColor = 'white';
    actualNumber = generateRandomNumber();
    document.querySelector('.number').style.width = '15rem';

}

document.querySelector('.check').addEventListener('click', EqualCheck);
document.querySelector('.again').addEventListener('click', playAgain);