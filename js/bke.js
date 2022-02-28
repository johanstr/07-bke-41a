/***************************************************
 *  Boter-Kaas-Eieren
 *  ------------------------------------------------
 *  Versie:     2021
 **************************************************/

/*
    CONSTANTEN
*/



/*
    VARIABELEN
*/
let game_board = document.querySelectorAll('.game-board img');
let game_button = document.querySelector('.button button');
let element_turn_image = document.querySelector('.player-info__identifier img');
let element_turn_playernumber = document.querySelector('.player-info__number');
let element_score_player_1 = document.querySelector('#player1-score');
let element_score_player_2 = document.querySelector('#player2-score');
let element_round = document.querySelector('.round-info__number');
let element_timer = document.querySelector('.timer');


/*
    INITIALISATIE
*/
window.onload = function () {
    game_button.addEventListener('click', buttonClickHandler);

    // @TODO: Verplaatsen naar buttonClickHandler
    game_board.forEach(cell => {
        activateCellClickHandler(cell);
     });
}

/* 
  MAIN FUNCTIONS
*/
function buttonClickHandler(event)
{
    console.log('Button clicked');
}


function cellClickHandler(event)
{
    console.log('Cell clicked');
}

/*
    HELPER FUNCTIONS
*/
function activateCellClickHandler(cell)
{
    cell.addEventListener('click', cellClickHandler);
}

function deactivateCellClickHandler(cell)
{
    cell.removeEventListener('click', cellClickHandler);
}