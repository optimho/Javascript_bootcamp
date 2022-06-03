const numbers = [22,33,44,55,66,77,88,99]
arr = [{
    Author:'One',
    Book: 'book 1',
    rating: 1
},
    {
        Author:'two',
        Book: 'book 2',
        rating: 2
    },
    {
        Author:'three',
        Book: 'book 3',
        rating:3
    },
    {
        Author:'four',
        Book: 'book 4',
        rating: 4
    },
    {
        Author:'five',
        Book: 'book 5',
        rating: 5
    }];

var nameOfMapFunction = numbers.map(function(n){
    return n/2;
})

// console.log(nameOfMapFunction)

var authors = arr.map(function(t){
    return t.Author;
})

console.log(authors)
