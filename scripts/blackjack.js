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
];

let dealerHand = document.querySelector('#dealer-hand')
let playerHand = document.querySelector('#player-hand')
let dealerPoints = document.querySelector('#dealer-points')
let playerPoints = document.querySelector('#player-points')
let dealBtn = document.querySelector('#deal-button')
let hitBtn = document.querySelector('#hit-button')
let standBtn = document.querySelector('#stand-button')

// pop card objects off deck into either player or dealer hands
let player = []
let dealer = []

// add event listener to button, add a new image element w/ class="card"
// append 2 new images to the #dealer-hand & the #player-hand

// Random Card Function:
let randomCard = (cards) =>{
    const random = Math.floor(Math.random() * 51)
    // let cardValue = cards[random].value // need to push to dealer/player points and add on to existing points
    // console.log(cardValue);
    // let cardImg = cards[random].imgFile // need to push new image to player/dealer hand
    // console.log(cardImg);
    return cards[random] 
}   

let newCard = randomCard(cardDeck)
console.log(newCard);
let newCard2 = randomCard(cardDeck)
console.log(newCard2);
let newCard3 = randomCard(cardDeck)
console.log(newCard3);
let newCard4 = randomCard(cardDeck)
console.log(newCard4);


let newImg = document.createElement('img')
newImg.setAttribute('class', 'card')
newImg.setAttribute('src', newCard.imgFile)
let newImg2 = document.createElement('img')
newImg2.setAttribute('class', 'card')
newImg2.setAttribute('src', newCard2.imgFile)
let newImg3 = document.createElement('img')
newImg3.setAttribute('class', 'card')
newImg3.setAttribute('src', newCard3.imgFile)
let newImg4 = document.createElement('img')
newImg4.setAttribute('class', 'card')
newImg4.setAttribute('src', newCard4.imgFile)

let dealerCurVal = 0;
let playerCurVal = 0;

dealBtn.addEventListener("click", (e)=>{
    console.log(e);
    let deal4 = ()=>{
        dealerHand.append(newImg)
        dealerHand.append(newImg2)
        playerHand.append(newImg3)
        playerHand.append(newImg4)
    }
    deal4()
    let deal4points = ()=>{
        //dealer:
        dealerCurVal = newCard.value
        dealerCurVal = dealerCurVal + newCard2.value 
        console.log(dealerCurVal); 
        dealerPoints.innerHTML = dealerCurVal
        //player:
        playerCurVal = newCard3.value
        playerCurVal = playerCurVal + newCard4.value
        console.log(playerCurVal);
        playerPoints.innerHTML = playerCurVal
    }
    deal4points()

})

hitBtn.addEventListener("click", async (e)=>{
    let hitCard = randomCard(cardDeck)
    console.log(hitCard);
    let hitCardImg = document.createElement('img')
    hitCardImg.setAttribute('class', 'card')
    hitCardImg.setAttribute('src', hitCard.imgFile)
    playerHand.append(hitCardImg)
    playerCurVal = playerCurVal + hitCard.value
    playerPoints.innerHTML = playerCurVal
    if(playerPoints.innerHTML > 21){
        await delay(500);
        if(confirm("Bust! You lost to the dealer. New game?")) {
            location.reload(); // Reload the page if the user clicks "OK"
        } else {
            document.querySelector('#hit-btn').disabled = true;
        }
    }
})

standBtn.addEventListener("click", async (e)=>{
    console.log(e);
    while (dealerCurVal < 17){
        let newDealerCard = randomCard(cardDeck)
        console.log(newDealerCard);
        let newDealerCardImg = document.createElement('img')
        newDealerCardImg.setAttribute('class', 'card')
        newDealerCardImg.setAttribute('src', newDealerCard.imgFile)
        dealerHand.append(newDealerCardImg)
        dealerCurVal = dealerCurVal + newDealerCard.value
        dealerPoints.innerHTML = dealerCurVal
        if(dealerPoints.innerHTML > 21){
            await delay(500);
            if(confirm("The dealer busts. You Win! New game?")) {
                location.reload(); // Reload the page if the user clicks "OK"
            }
        }
    } 
})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



