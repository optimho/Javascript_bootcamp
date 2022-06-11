
const nums = [14,76,34,35,36,67,106,102,31,9]

console.log( Math.max(nums))

// that dosen't work as max expects a list of numbers like this, not an array
console.log( Math.max(12,34,56,4,33,23))

// to fix this try

console.log( Math.max(...nums))

// the ... unpacks an array into a list of consecitive numbers



