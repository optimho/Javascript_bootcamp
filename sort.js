const prices = [400.5, 3000, 2343,121,3241]

console.log(prices.sort())

//notice the odd behaviour of the sort.
//It is sorting by string value, not value of the number?

console.log(prices.sort((a,b) => a-b))
// now it sorts the correct way

console.log(prices.sort((a,b) => b-a))
