const words = ['dog','dig','log','wag'];

arrry = [{
    Author:['one', 'two'],
    Book: 'book 1',
    rating: 1.5,
    genre: 'fiction'
},
    {
        Author:['two'],
        Book: 'book 2',
        rating: 2.3,
        genre: 'fiction'
    },
    {
        Author:['three','four','one'],
        Book: 'book 3',
        rating:3.2,
        genre: 'history'
    },
    {
        Author:['four'],
        Book: 'book 4',
        rating: 4.1,
        genre: 'history'
    },
    {
        Author:['five','one'],
        Book: 'book 5',
        rating: 5.2,
        genre: 'law'
    }];


const checkFor = words.some(items => items === 'dog')
// console.log(checkFor)

const findAuthors = arrry.some(auth => {
    // console.log(auth.Author);
    const name= auth.Author.includes('four') && auth.Author.includes('three')
    // console.log(name)
    return name;
});
console.log(findAuthors)
