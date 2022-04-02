'use strict';

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
//  document.querySelector('.number').textContent = secrectNumber;
let score = 20
let highscore = 0
document.querySelector('.guess').focus()

document.querySelector('.check').addEventListener('click', () =>{

    const guess = Number(document.querySelector('.guess').value)
    
    
    if(!guess){
        if(score === 0){
        score = 0
        }else {
            score--;
        }
        document.querySelector('.message').innerHTML = 'No number!'
        document.querySelector('.score').innerHTML = score
    }else if(guess === secrectNumber){
        document.querySelector('.message').innerHTML = ':) Correct number!'
        
        document.querySelector('h1').innerHTML = 'You Won the  Game :)'
        document.body.style.backgroundColor = 'green'
        document.querySelector('.number').textContent = secrectNumber;

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').innerHTML = highscore
        }else{
            document.querySelector('.highscore').innerHTML = highscore
        }   

       
    }else if(guess > secrectNumber){
        if(score === 0){
        score = 0
        }else {
            score--;
        }
        document.querySelector('.score').innerHTML = score
        document.querySelector('.message').innerHTML = ':( too high..!'
    }else if(guess < secrectNumber){
        
        if(score === 0){
        score = 0
        }else {
            score--;
        }
        document.querySelector('.score').innerHTML = score
        document.querySelector('.message').innerHTML = ':( too Low..!'
    }
    if(score === 0){
        score = 0
        document.querySelector('h1').innerHTML = 'You lost the  Game :('
        document.body.style.backgroundColor = 'red'
    }
    
})



document.querySelector('.again').addEventListener('click', () =>{
    secrectNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20
    document.body.style.backgroundColor = 'black'
    document.querySelector('.score').innerHTML = score
    document.querySelector('.message').innerHTML = 'Start guessing'
    document.querySelector('.guess').focus()
    document.querySelector('.guess').value = null
})