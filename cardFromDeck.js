
function dealAcard(){
    let card=['Ace','2','3,','4','5','6','7','8','9','Jack','King','Queen'];
    let suit=['Clubs', 'Hearts', 'Diamonds','Spades'];
    const draw = {
        card: card[Math.floor(Math.random() * 12)],
        suit: suit[Math.floor(Math.random() * 4)],
    };

   return draw;
}
