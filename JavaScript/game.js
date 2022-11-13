const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");


const openModal = () => {
    modal.classList.remove("hidden");
}
openModalBtn.addEventListener('click',openModal);

const closeModal = () => {
    modal.classList.add("hidden");
}
closeModalBtn.addEventListener('click',closeModal);



/////////////////////////////STEN,SAX,PÅSE///////////////////////////////////////////

const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorBtn = document.querySelector(".Scissors");
const resultat = document.querySelector(".resultText");
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score');
const resetBtn = document.querySelector(".reset");
const computerOpt = ["Rock", "Paper", "Scissors"];
const playerOpt = [rockBtn, paperBtn, scissorBtn];

function increaseScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}
function resetScore(){
    yourScoreSpan.innerText = '0'
    computerScoreSpan.innerText = '0'
    resultat.innerText = '';
}
function gameOver(){
    if (yourScoreSpan.innerText == '5'){
        console.log("-----You Win-----")
        alert("YOU WIN "+ "| " +`Userscore: ${yourScoreSpan.innerText} Computerscore: ${computerScoreSpan.innerText}`);
        resetScore();
    }else if(computerScoreSpan.innerText == '5'){
        console.log("COMPUTER WON")
        alert("COMPUTER WON " + "| " +`Userscore: ${yourScoreSpan.innerText} Computerscore: ${computerScoreSpan.innerText}`);
        resetScore();
    }
}
resetBtn.addEventListener('click', resetScore);

playerOpt.forEach(option => {
    console.log(option);
    option.addEventListener('click', function(){
        
        const ai = Math.round((Math.random() * 2));
        const computerOption = computerOpt[ai];
        console.log(computerOption);
        
        
        if(option.innerHTML == computerOption){
        
            console.log(option.innerHTML + "Draw");
            resultat.innerText = "Result:" + " " + "Draw!";
            
        }else if (option.innerHTML == "Rock" && computerOption == "Paper") {
            console.log(option.innerHTML + "Lose");
            resultat.innerText = "Result: Rock, You Lost! " + "The AI chose :" + computerOption;
            increaseScore(computerScoreSpan);
        }else if (option.innerHTML == "Rock" && computerOption === "Scissors") {
            console.log(option.innerHTML + "Win");
            resultat.innerText = "Result: Rock, You Won! " + "The AI chose: " + computerOption;
            increaseScore(yourScoreSpan)

        } 
        if (option.innerHTML == "Paper" && computerOption == "Rock") {
            console.log(option.innerHTML + "Win");
            resultat.innerText = "Result: Paper, You Won!" + " " + "The AI chose: " + computerOption;
            increaseScore(yourScoreSpan)
        }

        else if(option.innerHTML == "Paper" && computerOption == "Scissors") {
            resultat.innerText = "Result: Paper, You Lost! " + " The AI chose: " + computerOption;
            increaseScore(computerScoreSpan)
        }
        if (option.innerHTML == "Scissors" && computerOption == "Rock") {

            resultat.innerText = "Result: Scissors, You Lost! " + " The AI chose: " + computerOption;
            increaseScore(computerScoreSpan)
        }
        else if (option.innerHTML == "Scissors" && computerOption == "Paper") {
            
            console.log(option.innerHTML +"Win");
            resultat.innerText = "Result: Scissors, You Won! " + "The AI chose: " + computerOption;
            increaseScore(yourScoreSpan)
        }

        gameOver();

    })
    
})



