
function isPangram(sentance){
    const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (let letter of alphabet){
        if (sentance.toLowerCase().includes(letter)){
            if (letter==='z'){
                return true
            }
        } else {
            return false
        }
    }
}

isPangram('The quick brown fox jumps over the lazy dog')
