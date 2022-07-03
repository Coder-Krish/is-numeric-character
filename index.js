function IsNumericCharacter(string){
    if(isNaN(string) === false)
    return true;
    else
    return false;
}

module.exports = IsNumericCharacter;