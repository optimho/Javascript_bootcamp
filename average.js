
function average(arr){
    let total=0;
    let loops=0;
    leng=arr.length;

    for (let num of arr){
        total += num
    }
    return total/leng;
}


