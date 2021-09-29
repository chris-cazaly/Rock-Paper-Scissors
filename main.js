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

    console.log("Player:", player,"Computer:", computer);
    // console.log("playerWins:", playerWins);
    // console.log("");

    let outcome = `Player: ${player}, Computer: ${computer}`
    results.innerText = outcome;

    if (playerWins) {     
        console.log("Player wins!");
        winner.innerText = "Player wins!";
    } 
    else if (draw) {
        console.log("It's a draw!")
        winner.innerText = "It's a draw!";
    } 
    else {
        console.log("Computer wins!")
        winner.innerText = "Computer wins!";
    }

}

