module.exports = function (n, a) {
    const sortedSprinklerByPower = a.sort().reverse();
    let countSprinklers = 0;
    let powerSprinklers = 0;

    for(let i = 0; i <= n; i++) {
        if (n > powerSprinklers) {
            countSprinklers++;
            powerSprinklers += sortedSprinklerByPower[i] + 1;
        } else {
            return  countSprinklers;
        }
    }
}
