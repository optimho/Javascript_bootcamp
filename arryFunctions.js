var timeit = new TimeIt();
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


function TimeIt() {
    var self = this;

    function howLong(iterations, testFunction) {
        var results = [];
        var total = 0;
        for (var i = 0; i < iterations; i++) {
            var start = performance.now();
            testFunction();
            var end = performance.now();
            var duration = end - start;
            results.push(duration);
            total += duration;
        }
        var result = {
            results: results,
            total: total,
            avg: total / results.length
        }
        return result;
    }

    self.howLong = howLong;
}


let foo = function() {
    arr.forEach(function(data){
        console.log(data.Author)
        console.log(data.Book)
        console.log(data.rating)
    })
}


var result = timeit.howLong(10, foo);
console.log("avg: " + result.avg);
console.log("total: " + result.total);
