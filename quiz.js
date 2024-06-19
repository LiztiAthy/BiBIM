const cards = document.querySelectorAll(".card");
const celebrationOverlay = document.getElementById("celebration-overlay");
const refreshButton = document.getElementById("refresh-button");

// Sound elements
const wrongSound = document.getElementById("wrong-sound");
const sameCardSound = document.getElementById("same-card-sound");
const completeSound = document.getElementById("complete-sound");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        sameCardSound.play();
        if(matched == 8) {
            setTimeout(() => {
                celebrationOverlay.classList.add("show");
                completeSound.play();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        resetCards();
        disableDeck = false;
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
            wrongSound.play();
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            resetCards();
            disableDeck = false;
        }, 1200);
    }
}

function resetCards() {
    cardOne = cardTwo = null;
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = null;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
    });
}

refreshButton.addEventListener("click", () => {
    shuffleCard();
    celebrationOverlay.classList.remove("show");
});

shuffleCard();
cards.forEach(card => card.addEventListener("click", flipCard));
