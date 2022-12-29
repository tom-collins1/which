function isValidEmailFormat(email)
{
    return /[^\s]*@(\w+\.)+/.test(email)
}

module.exports = isValidEmailFormat;