arry = {
    Author:'One',
    Book: 'book 1',
    rating: 1.5,
    genre: 'fiction'
}

const newObj = {
    ...arry,
    ISBN: 122321234
}
console.log(newObj)
