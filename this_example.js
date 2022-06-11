const annoyer = {
    phrases: ["literally","cray cray","I can't even","Totes!","YOLO","Can't stop wont stop"],
    pickphrase(){

        const idx = Math.floor(Math.random()*this.phrases.length)
        return this.phrases[idx]
    },
    start() {
        // console.log(this.pickphrase())
        // have to use an arrow function here
        // it doesn't get is own 'this' and is tied to this the annoyer object by default.
        // the following causes a failure, it somehow references the window object
        // instead of the annoyer object.
        // setInterval(function () {console.log(this.pickphrase())},3000)
    // },
        //
        this.x=this.pickphrase()
        this.timerId = setInterval(()=> {console.log(this.pickphrase())},3000)
    },

    // this.timerId = setInterval(function() {(console.log(x))},3000)
// },
    stop(){
        clearInterval(this.timerId);
    }
}
