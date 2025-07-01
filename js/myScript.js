    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
      const choices = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }

    function playRound(humanChoice, computerChoice) {
      const resultDiv = document.getElementById("result");
      const scoreDiv = document.getElementById("score");
      const finalDiv = document.getElementById("final");

      resultDiv.textContent = `You chose: ${humanChoice} | Computer chose: ${computerChoice}`;

      if (humanChoice === computerChoice) {
        resultDiv.textContent += " — It's a tie!";
      } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        humanScore++;
        resultDiv.textContent += " — You win this round!";
      } else {
        computerScore++;
        resultDiv.textContent += " — Computer wins this round!";
      }

      scoreDiv.textContent = `Score => You: ${humanScore} | Computer: ${computerScore}`;

      if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        finalDiv.textContent = `${winner} win the game!`;

        // Disable buttons
        document.querySelectorAll("button").forEach(button => button.disabled = true);
      }
    }

    // Button event listeners
    document.getElementById("rock").addEventListener("click", () => {
      playRound("Rock", getComputerChoice());
    });

    document.getElementById("paper").addEventListener("click", () => {
      playRound("Paper", getComputerChoice());
    });

    document.getElementById("scissors").addEventListener("click", () => {
      playRound("Scissors", getComputerChoice());
    });

