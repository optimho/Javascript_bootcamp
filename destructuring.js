// getting data out of objects and arrays

const raceResults=[
    'Eliud Kipchoge','Feysia Lelisa','Galen Rupp','Ghirmay Ghebreslassi','Alphonce Simbu','Jarad Ward']

obje = [{
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

//destructuring an array
const [gold, silver,bronze] = raceResults

console.log('the race first place result: ${[gold]}', gold)

//destructuring objects, but first get the second object from an array
const placeHolder = [,secondObjectInArray] = obje;
console.log (secondObjectInArray);

//destructure one element from an object
const {Author} = secondObjectInArray;
console.log(Author);

// change the object from Author to the writer
const {Author: writer} = secondObjectInArray;
console.log (writer)

