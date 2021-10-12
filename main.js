// array of images
const gameImages = [
    "images/rock.png",
    "images/paper.png",
    "images/scissors.png"
];

// array of game options
const options = [ 
    "rock", 
    "paper", 
    "scissors" 
];

// DOM SELECTORS

const playerImage = document.querySelector("#player-image");
const versusText = document.querySelector("#versus");
const computerImage = document.querySelector("#computer-image");

const gameText = document.querySelector("#game-text");
const body = document.body;

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const resetButton = document.querySelector("#reset-button")
const playButtons = [rockButton, paperButton, scissorsButton];

// VARIABLES
// --------------------
let canPlay = true;
// --------------------

function play(event) {

    const thisButton = event.target;

    if (canPlay){

        // - prevent repeat inputs -
        canPlay = false;

        // - make choices -
        let playerChoice = thisButton.id;
        let randomIndex = Math.floor(Math.random() * options.length);
        let computerChoice = options[randomIndex];

        // - display images -

        playerImage.classList.remove("hidden");
        versusText.classList.remove("hidden");
        computerImage.classList.remove("hidden");

        playerImage.src = gameImages[options.indexOf(playerChoice)];
        computerImage.src = gameImages[options.indexOf(computerChoice)]

        // - determine winner -
        let result = compareChoices(playerChoice, computerChoice).toUpperCase();

        // - set game text -
        gameText.innerText = result;
        
        // - set background colour -
        if (result == "WIN") {
            body.style.backgroundColor = "var(--color-win)"
        } else if (result == "DRAW") {
            body.style.backgroundColor = "var(--color-draw)"
        } else {
            body.style.backgroundColor = "var(--color-lose)"
        }
        
        // - show reset button -
        resetButton.classList.remove("hidden");
    }
  
}

function reset(event) {
    
    // - enable canPlay -
    canPlay = true;

    // - hide reset button -
    resetButton.classList.add("hidden");

    // - hide results images -
    playerImage.classList.add("hidden");
    versusText.classList.add("hidden");
    computerImage.classList.add("hidden");

    // - reset background colour
    body.style.backgroundColor = "var(--color-default)";

    // - reset game text -
    gameText.innerText = "PLAY";
}

function compareChoices(playerChoice, computerChoice) {
    let result = "";

    if ( 
        playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper"
    ) {
        result = "win";

    } else if (playerChoice == computerChoice) {
        result = "draw";

    } else {
        result = "lose";
    }

    return result;
}



