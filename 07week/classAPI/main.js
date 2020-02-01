'use strict'
let deckID;
let turn1 = true;

class Player {
    constructor (cards) {
        this.hand = cards;
    }
    cardCount(){
        let playerCardCount;
        if(this == player1){
            playerCardCount = document.getElementById("playerCardCount");
        } else {
            playerCardCount = document.getElementById("opponentCardCount");
        }
        playerCardCount.innerHTML = this.hand.length;
    }
    playCard(){

    }
}

let player1 = new Player(0);
let player2 = new Player(0);

window.onload = function(){
    let dealButton = document.getElementById("deal");
    dealButton.disabled = 'true';
    //commented this out so it doesn't make a new deck every time I save.
    
    // fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    // .then(res => res.json())
    // .then(json =>{
    //     deckID = json.deck_id;
    //     console.log("got deck "+deckID);
    //     makeOpponent(deckID);
    // })
    deckID = 'iqdy4nglpdkp';
    makeOpponent('iqdy4nglpdkp');
}

function shuffle(){
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`)
    .then(res => res.json())
    .then(cards => {
        let status = document.getElementById("status");
        status.innerHTML = "Shuffled!";
        console.log(cards);
        let dealButton = document.getElementById("deal");
        dealButton.disabled = false;
        player1.hand = {};
        player2.hand = {};
        // console.log(deckID);
    })
    // .catch(console.log("Error"))
}

function dealCards(){
    halfCards(player1);
    halfCards(player2);
    let dealButton = document.getElementById("deal");
    dealButton.disabled = true;
    // player1.cardCount();
    // player2.cardCount();
    // console.log(player1.hand);
    // console.log(player2.hand);
}

function halfCards(player) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=26`)
    .then(res => res.json())
    .then(result =>{
        console.log("Hand ", result.cards);
        player.hand = result.cards;
        player.cardCount();
        // return result.cards;
    })
}
// let playerCardCount = document.getElementById("playerCardCount");
// playerCardCount.innerHTML = player1.hand.length;
// let opponentCardCount = document.getElementById("opponentCardCount");
// opponentCardCount.innerHTML = player2.hand.length;

//All the player and opponent code:
//robohash.org/
function makeOpponent(deckID){
    console.log(`fetching robot ${deckID}`)
    let url = `https://robohash.org/${deckID}.png`;
    let opponentPic = document.getElementById("opponentPic");
    let opponentName = document.getElementById("opponentName");
    let pic = document.createElement('img');
    pic.className = 'robot';
    pic.src = url;
    opponentName.innerHTML = deckID;
    opponentPic.appendChild(pic);
}
function makePlayer() {
    console.log("Fetching robot");
    let playerName = document.getElementById("changeName");
    let playerPic = document.getElementById("playerPic");
    let robot = playerName.value;
    // robotFetch(robot);
    let url = `https://robohash.org/${robot}.png`;
    let pic = document.createElement('img');
    pic.className = 'robot';
    pic.src = url;
    playerPic.appendChild(pic);
    changeName(robot);
    stopName();
    // console.log(`robohash.org/`)
}
function changeName(robot){
    let nameChange = document.getElementById('playerName');
    nameChange.innerHTML = robot;
}
function stopName(){
    let stopButton = document.getElementById('join');
    let stopName = document.getElementById('changeName');
    stopName.disabled = true;
    stopButton.disabled = true;
}
