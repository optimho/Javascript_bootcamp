
function sayHi(){
    console.log("hi");
    console.log(this);

}

sayHi();

const person = {
    firstName: 'cherilyn',
    lastName: 'Sarkasian',
    nickname: 'cher',
    fullname(){
        console.log(this.first);
    }
}
