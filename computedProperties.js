const role = "host";
const person = "Jools Holland";
const role2 = "director";
const person2 = "James Cameron";

let team = {

    [role]:person,
    [role2]:person2
}

console.log(team)

// a short way of assigning keys to data.

function addProperty(obj,k,v){

    const aCopy = {...obj};
    aCopy[k]=v;
    return aCopy
}

const valueOfProperty = addProperty(team, 'happy',':)')
console.log(`the awswer is `,valueOfProperty)


