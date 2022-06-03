
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

const goodBooks = arr.find(book => book.rating >4)
console.log (goodBooks)

const author = arr.find(book => book.Author.includes('three'))
console.log(author)

