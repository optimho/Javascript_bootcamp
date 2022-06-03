
const thenAnswer = x=>{
    return x*x;
}

console.log(thenAnswer(8))


const anotherArrow = (x,y) =>{
    return x+y;
}

console.log(anotherArrow(2,2))

const square = (n) =>(
    n*n+1
)
console.log(square(2))

const AnotherSquare = (x)=>x/2+3
console.log(AnotherSquare(2))

const arr = [1,2,3,4,5,6,7,8,9]

const doubles = arr.map((x)=>x*x)
console.log(doubles)

const evaluate = arr.map((x) => x>5 ? true: false )
console.log(evaluate)
