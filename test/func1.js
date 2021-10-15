module.exports = function (str, symbol) {
    let result = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === symbol) result++;
    }

    return result;
}