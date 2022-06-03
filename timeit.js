
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

