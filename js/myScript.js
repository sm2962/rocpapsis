console.log("Hello Guys, Whatsup");

function getComputerChoice(){
    let computerChoice;
    let number = Math.random();
    if (number < 1/3){
        computerChoice = "Rock";
    }else if( number < 2/3){
        computerChoice = "Paper";
    }else{
        computerChoice = "Scissors";
    }
    console.log("Computer chose:", computerChoice);
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Whats Your Play Human: Paper , Rock ,Scissors");

     humanChoice = humanChoice.trim().toLowerCase();

    if (humanChoice === "paper") {
    console.log("You chose: Paper");
    return "Paper";
} else if (humanChoice === "rock") {
    console.log("You chose: Rock");
    return "Rock";
} else if (humanChoice === "scissors") {
    console.log("You chose: Scissors");
    return "Scissors";
}else {
        console.log("❌ Invalid input. Try again.");
        return getHumanChoice(); // recursion to retry
    }
}

function playRound(humanChoice,computerChoice){
     console.log(`You chose: ${humanChoice}`);
     console.log(`Computer chose: ${computerChoice}`);

    if(humanChoice === computerChoice){
        console.log("TIE");
    }else if(humanChoice === "Paper" && computerChoice === "Rock" || 
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ){

        console.log("You Win this Round");
        return "human";
    }else{
        console.log("Compuer Wins this Round");
        return "computer";
    } 
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} ---`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("\n--- Final Result ---");
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();

