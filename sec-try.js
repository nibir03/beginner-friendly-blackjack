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
    
    const drawCard = () => {};
    
    console.log(Math.floor(Math.random() * 52));