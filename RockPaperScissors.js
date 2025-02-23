//TODO: ERROR messages appear twice

let playerScore = 0;
let computerScore = 0;
let validRound;

function getComputerChoice()
{
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    //console.log(computerChoiceNum);

    let computerChoiceString;

    if(computerChoiceNum == 1)
    {
        computerChoiceString = "rock";
        console.log("Computer Choice: " + computerChoiceString);
        return computerChoiceString;
    }
    else if(computerChoiceNum == 2)
    {
        computerChoiceString = "paper";
        console.log("Computer Choice: " + computerChoiceString);
        return computerChoiceString;
        
    }
    else if(computerChoiceNum == 3)
    {
        computerChoiceString = "scissors";
        console.log("Computer Choice: " + computerChoiceString);
        return computerChoiceString;
    }
    else
    {
        console.log("ERROR: Computer choice isn't Rock, Paper, or Scissors");
        alert("ERROR: Computer choice isn't Rock, Paper, or Scissors");
    }

    // console.log("Computer Choice: " + computerChoiceString);
}

function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice (Rock = rock. Paper = paper. Scissors = scissors.) \nNOTE: Case insensitive (Changes to lower case)");
    humanChoice = humanChoice.toLowerCase();
    console.log("Human Choice: " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    let outcome;
    validRound = true;

    //If the player chooses rock
    if(humanChoice == "rock")
    {
        if(computerChoice == "rock")
        {
            outcome = "Tie!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            validRound = true;
            return validRound;
        }
        if(computerChoice == "paper")
        {
            outcome = "You Lost!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            computerScore++;
            return validRound;
        }
        if(computerChoice == "scissors")
        {
            outcome = "You Win!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            playerScore++;
            return validRound;
        }
    }

    //If the player chooses paper
    else if(humanChoice == "paper")
    {
        if(computerChoice == "rock")
        {
            outcome = "You Win!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            playerScore++;
            return validRound;
        }
        if(computerChoice == "paper")
        {
            outcome = "Tie!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return validRound;
        }
        if(computerChoice == "scissors")
        {
            outcome = "You Lost!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            computerScore++;
            return validRound;
        }
    }
    
    //If the player chooses scissors
    else if(humanChoice == "scissors")
    {
        if(computerChoice == "rock")
        {
            outcome = "You Lost!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            computerScore++;
            return validRound;
        }
        if(computerChoice == "paper")
        {
            outcome = "You Win!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            playerScore++;
            return validRound;
        }
        if(computerChoice == "scissors")
        {
            outcome = "Tie!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return validRound;
        }
    }

    //Returns alert if player choice isn't rock, paper, or scissors
    else
    {
        alert("ERROR: Player Choice was not rock, paper, or scissors.");
        console.log("ERROR: Player Choice was not rock, paper, or scissors.")
        validRound = false;
        return validRound;
    }
}

function playGame()
{
    playerScore = 0;
    computerScore = 0;
    let computerChoice;
    let playerChoice;
    let roundNum = 1;

    while(roundNum <= 5)
    {
        computerChoice = getComputerChoice();
        playerChoice = getHumanChoice();
        
        if(playRound(playerChoice, computerChoice) == true)
        {
            roundNum++;
        }
    }

    alert("Game Results" + "\n" + "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore);
}
playGame();