console.log("Hello World!");

function getComputerChoice()
{
    computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoiceNum);

    let computerChoiceString;

    if(computerChoiceNum == 1)
    {
        computerChoiceString = "Rock";
    }
    else if(computerChoiceNum == 2)
    {
        computerChoiceString = "Paper";
    }
    else if(computerChoiceNum == 3)
    {
        computerChoiceString = "Scissors"
    }
    else
    {
        console.log("ERROR: Computer choice isn't Rock, Paper, or Scissors");
    }

    console.log("Computer Choice: " + computerChoiceString);
}

function getHumanChoice()
{
    
}

getComputerChoice();