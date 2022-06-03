const nums = [14,76,34,35,36,67,106,102,31,9]

const isEven = nums.filter(n=> n%2===0)
// console.log(isEven)

arry = [{
    Author:'One',
    Book: 'book 1',
    rating: 1.5,
    genre: 'fiction'
},
    {
        Author:'two',
        Book: 'book 2',
        rating: 2.3,
        genre: 'fiction'
    },
    {
        Author:'three',
        Book: 'book 3',
        rating:3.2,
        genre: 'history'
    },
    {
        Author:'four',
        Book: 'book 4',
        rating: 4.1,
        genre: 'history'
    },
    {
        Author:'five',
        Book: 'book 5',
        rating: 5.2,
        genre: 'law'
    }];

// console.log(arry)

const moreGoodBooks = arry.filter(value=>value.rating>=4)
// console.log(moreGoodBooks)

const selection = arry.filter(book =>{
    return book.genre.includes('law') || book.genre.includes('history')
    })

console.log(selection)
