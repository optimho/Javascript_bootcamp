// if we want to pass a default parameter to a function


const blah = (x,y=2)=>{
    console.log('${x}', x, ' ', y)
}

blah(2, 3)

// or

blah(2);
