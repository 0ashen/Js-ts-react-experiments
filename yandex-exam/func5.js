function checkIncreasedOrder(number) {
    const numStr = number.toString();

    for (let i = 0; i < numStr.length - 1; i++) {
        if (Number.parseInt(numStr[i]) > Number.parseInt(numStr[i + 1])) return false;
    }

    return true;
}

function checkSumNumbers(number, targetSum) {
    return number.toString().split('').reduce((acc, cur) => (acc += Number.parseInt(cur)), 0) === targetSum;
}

function getNearestAscendingNumber(number) {
    const strNum = number.toString();

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[+i] > +strNum[i + 1]) {
            return Number.parseInt(strNum.split('').map((el, idx) => {
                if (idx === i + 1) return strNum[+i]
                return el;
            }).join(''))
        }
    }


}

module.exports = function (n, k) {
    let counter = 0;
    let minSuitableNumber = null;
    let maxSuitableNumber = 0;

    const maxNumber = Number.parseInt('9'.repeat(k));

    for (let i = 111; i <= maxNumber;i++) {
        if (checkIncreasedOrder(i)) {
            if (checkSumNumbers(i, n)) {
                counter++;
                if (minSuitableNumber === null) minSuitableNumber = i;
                maxSuitableNumber = i;
            }
        } else {
            i = getNearestAscendingNumber(i) - 1;
        }

    }

    return counter === 0 ? [counter] : [counter, minSuitableNumber, maxSuitableNumber]
}


