console.log("Hello World!");

function getComputerChoice()
{
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoiceNum);

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
    let humanChoice = prompt("Enter your choice (Rock = rock or 1. Paper = paper or 2. Scissors = scissors or 3.) \nNOTE: Case Sensitive");
    console.log("Human Choice: " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    let outcome;

    //If the player chooses rock
    if(humanChoice == 1 || humanChoice == "rock")
    {
        if(computerChoice == "rock")
        {
            outcome = "Tie!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
        if(computerChoice == "paper")
        {
            outcome = "You Lost!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
        if(computerChoice == "scissors")
        {
            outcome = "You Win!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
    }

    //If the player chooses paper
    else if(humanChoice == 2 || humanChoice == "paper")
    {
        if(computerChoice == "rock")
        {
            outcome = "You Win!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
        if(computerChoice == "paper")
        {
            outcome = "Tie!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
        if(computerChoice == "scissors")
        {
            outcome = "You Lost!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
    }
    
    //If the player chooses scissors
    else if(humanChoice == 3 || humanChoice == "scissors")
    {
        if(computerChoice == "rock")
        {
            outcome = "You Lost!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
        if(computerChoice == "paper")
        {
            outcome = "You Win!"
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
        if(computerChoice == "scissors")
        {
            outcome = "Tie!";
            alert("Round Outcome: " + outcome + "\n" + "Player Choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice);
            return outcome;
        }
    }

    //Returns alert if player choice isn't rock, paper, or scissors
    else
    {
        alert("ERROR: Player Choice was not rock, paper, or scissors.");
        getHumanChoice(computerChoice);
    }
}

let computerChoice = getComputerChoice();
let playerChoice = getHumanChoice();
playRound(playerChoice, computerChoice);