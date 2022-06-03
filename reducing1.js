const numbers = [3,5,7,9,10]
const bignumber = [87,97,64,86,102,103,70,64]

const sum = numbers.reduce((total, elements) => {
    return total+ elements;
});

console.log(sum)


const listOfNumbers = [3,4,5,6,7];

const mult=listOfNumbers.reduce((returnValue, numbersInList) => {
    return returnValue * numbersInList;
});

console.log(mult);

const maxVal = bignumber.reduce((max, valuesInList)=>{
if (valuesInList>max) return valuesInList;
return max;

})
console.log(maxVal);

const vote = ['yes','no','yes','yes','no','no','no','yes','no','yes','yes']

var results = vote.reduce((tally, voteInlist)=>{
    console.log(tally)
if (tally[voteInlist]) {
    tally[voteInlist]++
}
else {
    tally[voteInlist]=1;
}
return tally

}, {})

console.log(results)
