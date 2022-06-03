

var timeit = new TimeIt();


var foo = function() {
let snake = ['Blackmamba','viper','gaboon viper','puff adder','tree snake']

    snake.splice(3,0, 'green mamba');

}

function foo2() {
    let people=['Mrs RObinson','Angie','Joliene','Maggi May','Roxanne']
    document.write(people)

}

var result = timeit.howLong(1000, foo);
console.log("avg: " + result.avg);
console.log("total: " + result.total);

var result = timeit.howLong(1000, foo2);
console.log("avg 2: " + result.avg);
console.log("total 2: " + result.total);
