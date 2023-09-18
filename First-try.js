const deck = [];
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
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
    for (const suit of suits ) {
        deck.push({ card: card, suit: suit });
    }
}

console.log(deck)