let getStats = (arr) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((sum, r) => sum + r);
    let avg = sum / arr.length;
    return {
        max, min, avg, sum
    }
}

const review = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const statuss = getStats(review);
console.log(statuss);
console.log(statuss);


