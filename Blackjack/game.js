const generateDeck = () => {
//  hittade functionen när jag googlade 
const deck = [];
const colors = ["Hearts", "Clubs", "Diamonds", "Spades"];
const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",

];

for (const card of cards) {
    for (const color of colors ) {
        deck.push({ card: card, color: color });
    }
}

return deck;
};

const deck = generateDeck()

const drawCard = ()  => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return card;
};

const Player = [];
const dealer = [];

Player.push(drawCard(deck));
Player.push(drawCard(deck));
dealer.push(drawCard(deck));
dealer.push(drawCard(deck));

//console.log(Player);
//console.log(dealer);

const Score = () => {
    let total = 0;

    for (const card of hand) {
        if (card.card = 'King'){
            total += 10;
        }

       else  if (card.card = 'Queen'){
            total += 10;
        }

       else  if (card.card = 'Jack'){
            total += 10;
        }

        else if (card.card = 'Ace'){
            total += 1;
        }

        else {
            total += card.card;
        }
// tror att det ska stå total += Number(card.card); men inte säker, det kommer inte totala summan utan någonting helt annat efter man runa koden.
    }
};