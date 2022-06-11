const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


let stuff = [...cephalopods, gastropods]
console.log(stuff)

let stuff2 = [...cephalopods, ...gastropods]
console.log(stuff2)

// see the results of the two variations. The ... unstuffs the array and we pack each
// individule item into a new array. Note what happens when we do not use the spread operator


