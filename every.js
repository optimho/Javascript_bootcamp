const words = ['dog','dig','log','wag'];

const check = words.every(word => word.length ===3);


console.log(check)

const checkLastLetter = words.every(word => {

    const lastLetter = word[word.length -1];
    return lastLetter === 'g'
})

console.log(checkLastLetter);
