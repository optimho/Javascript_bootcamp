
//objects

const myDeck = {
    deck: [],
    drawnCard: [],
    suits: ['hearts','diamonds','spades','clubs'],
    values: 'Ace,2,3,4,5,6,7,8,9,10,Jack,King,Queen',
    initializeDeck(){
        for (let value of this.values.split(',')){
            for(let suit of this.suits){
                this.deck.push({value:value, suit:suit})
            }
        }
        // return this.deck;
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCard.push(card)
        return card;
    },
    shuffel(){
        for (let i=this.deck.length-1; i>0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            //swap
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    },
    drawMultiple(numCards){
        const cards = [];
        for(let i=0; i<numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    }
}
