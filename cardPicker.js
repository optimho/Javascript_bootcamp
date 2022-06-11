

const cardValue = ['Ace','2','3','4','5','6','7,','8,','9,','Jack','King','Queen'];
const suite = ['clubs','spades','hearts','diamonds'];

let cardPicker = (dataArray) => {
    let length = dataArray.length;
    let dataItem = Math.floor(Math.random() * length);
    return dataArray[dataItem];
}

function getCard(){
    let value = cardPicker(cardValue);
    let card = cardPicker(suite);
    return {
     value,
     card
    }
}
    console.log("you have picked ${3+45}",getCard());

