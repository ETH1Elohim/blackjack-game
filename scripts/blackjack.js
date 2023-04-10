//* Initial Logic:

let cardDeck = [
    { name: "2", value: 2, imgFile: 'images/2_of_clubs.png' },
    { name: "2", value: 2, imgFile: 'images/2_of_diamonds.png' },
    { name: "2", value: 2, imgFile: 'images/2_of_hearts.png' },
    { name: "2", value: 2, imgFile: 'images/2_of_spades.png' },
    { name: "3", value: 3, imgFile: 'images/3_of_clubs.png' },
    { name: "3", value: 3, imgFile: 'images/3_of_diamonds.png' },
    { name: "3", value: 3, imgFile: 'images/3_of_hearts.png' },
    { name: "3", value: 3, imgFile: 'images/3_of_spades.png' },
    { name: "4", value: 4, imgFile: 'images/4_of_clubs.png' },
    { name: "4", value: 4, imgFile: 'images/4_of_diamonds.png' },
    { name: "4", value: 4, imgFile: 'images/4_of_hearts.png' },
    { name: "4", value: 4, imgFile: 'images/4_of_spades.png' },
    { name: "5", value: 5, imgFile: 'images/5_of_clubs.png' },
    { name: "5", value: 5, imgFile: 'images/5_of_diamonds.png' },
    { name: "5", value: 5, imgFile: 'images/5_of_hearts.png' },
    { name: "5", value: 5, imgFile: 'images/5_of_spades.png' },
    { name: "6", value: 6, imgFile: 'images/6_of_clubs.png' },
    { name: "6", value: 6, imgFile: 'images/6_of_diamonds.png' },
    { name: "6", value: 6, imgFile: 'images/6_of_hearts.png' },
    { name: "6", value: 6, imgFile: 'images/6_of_spades.png' },
    { name: "7", value: 7, imgFile: 'images/7_of_clubs.png' },
    { name: "7", value: 7, imgFile: 'images/7_of_diamonds.png' },
    { name: "7", value: 7, imgFile: 'images/7_of_hearts.png' },
    { name: "7", value: 7, imgFile: 'images/7_of_spades.png' },
    { name: "8", value: 8, imgFile: 'images/8_of_clubs.png' },
    { name: "8", value: 8, imgFile: 'images/8_of_diamonds.png' },
    { name: "8", value: 8, imgFile: 'images/8_of_hearts.png' },
    { name: "8", value: 8, imgFile: 'images/8_of_spades.png' },
    { name: "9", value: 9, imgFile: 'images/9_of_clubs.png' },
    { name: "9", value: 9, imgFile: 'images/9_of_diamonds.png' },
    { name: "9", value: 9, imgFile: 'images/9_of_hearts.png' },
    { name: "9", value: 9, imgFile: 'images/9_of_spades.png' },
    { name: "10", value: 10, imgFile: 'images/10_of_clubs.png' },
    { name: "10", value: 10, imgFile: 'images/10_of_diamonds.png' },
    { name: "10", value: 10, imgFile: 'images/10_of_hearts.png' },
    { name: "10", value: 10, imgFile: 'images/10_of_spades.png' },
    { name: "jack", value: 10, imgFile: 'images/jack_of_clubs.png' },
    { name: "jack", value: 10, imgFile: 'images/jack_of_diamonds.png' },
    { name: "jack", value: 10, imgFile: 'images/jack_of_hearts.png' },
    { name: "jack", value: 10, imgFile: 'images/jack_of_spades.png' },
    { name: "queen", value: 10, imgFile: 'images/queen_of_clubs.png' },
    { name: "queen", value: 10, imgFile: 'images/queen_of_diamonds.png' },
    { name: "queen", value: 10, imgFile: 'images/queen_of_hearts.png' },
    { name: "queen", value: 10, imgFile: 'images/queen_of_spades.png' },
    { name: "king", value: 10, imgFile: 'images/king_of_clubs.png' },
    { name: "king", value: 10, imgFile: 'images/king_of_diamonds.png' },
    { name: "king", value: 10, imgFile: 'images/king_of_hearts.png' },
    { name: "king", value: 10, imgFile: 'images/king_of_spades.png' },
    { name: "ace", value: 1 || 11, imgFile: 'images/ace_of_clubs.png' },
    { name: "ace", value: 1 || 11, imgFile: 'images/ace_of_diamonds.png' },
    { name: "ace", value: 1 || 11, imgFile: 'images/ace_of_hearts.png' },
    { name: "ace", value: 1 || 11, imgFile: 'images/ace_of_spades.png' },
]

let card = document.querySelector('.card')
let points = document.querySelector('')
let dealBtn = document.querySelector('#deal-button')
let hitBtn = document.querySelector('#hit-button')
let standBtn = document.querySelector('#stand-button')

// pop card objects off deck into either player or dealer hands
let player = []
let dealer = []

// add event listener to button, add a new image element w/ class="card"
// append 2 new images to the #dealer-hand & the #player-hand

let dealCards = (cards) =>{



}


dealBtn.addEventListener("click", (e)=>{


})


dealCards(cardDeck)