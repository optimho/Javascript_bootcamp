
const math ={

    numbers: [1,2,3,4,5],
    add: function(x,y){
        return x+y;
    },
    multiply: function(x,y){
        return x*y;
    }
}

console.log(math.add(1,2));
console.log(`the answer is ${math.add(1,2)}`);

// this is a slightly shot hand of adding methods to an object

const auth ={
    login(){
        console.log("you are logged in")
    },
    logout(){
        console.log("You are logged out")
    }
}

auth.logout();
