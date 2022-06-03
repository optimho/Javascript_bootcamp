
function passwordCheck(userName, password){

    if (password.length>8){
        passwordLength =true
    } else {
        passwordLength = false
    }

    if (password.includes(userName)){
        passwordContainsUsername =true
    } else {
        passwordContainsUsername =false
    }

    if (password.includes(' ')){
        passwordContainsSpaces=true
    } else {
      passwordContainsSpaces = false
    }

    if (passwordLength===true && passwordContainsSpaces===false && passwordContainsUsername===false){
     return isValid = true
    } else {
        return isValid = false}
}

document.write(passwordCheck('michael', 'michall01'))
