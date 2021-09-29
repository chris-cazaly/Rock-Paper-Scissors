const results = document.getElementById("results");
const winner = document.getElementById("winner");

function play(choice) {

    // player = "rock", "paper", or "scissors"
    let player = choice;

    // computer = 0, 1, or 2
    let computer = Math.floor(Math.random() * 3);

    let options = [ "rock", "paper", "scissors" ];

    // convert computer from number to options[value]

    computer = options[computer];

    // compare player vs computer

    // win conditions:
    // winner   > loser
    // rock     > scissors
    // paper    > rock
    // scissors > paper

    let playerWins =
        (player == "rock" && computer == "scissors")
    ||  (player == "paper" && computer == "rock")
    ||  (player == "scissors" && computer == "paper");

    let draw = (player == computer);

    let outcome = `You: ${player}\n Computer: ${computer}`
    results.innerText = outcome;

    // set winner text

    if (playerWins) {     
        winner.innerText = "You win!";
        winner.style.color = "green";
    } 
    else if (draw) {
        winner.innerText = "It's a draw!";
        winner.style.color = "teal";
    } 
    else {
        winner.innerText = "Computer wins!";
        winner.style.color = "red";
    }

}

