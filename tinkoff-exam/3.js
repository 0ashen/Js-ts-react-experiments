let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCounter = 0;
let logCount;
let slicesCount;


rl.on('line', function (data) {
    if (lineCounter === 0) {
        const logAndSlicesCount = data.split(' ').map(el => Number(el));
        logCount = logAndSlicesCount[0];
        slicesCount = logAndSlicesCount[1];

        // Гуардим пользовательский ввод
        if (logAndSlicesCount.length !== 2) {
            console.error(`Количество данных отличается от требуемого, вы ввели: «${data}»`);
            process.exit(0);
        }
        if (!logAndSlicesCount.every(el => typeof (el) === 'number' && !isNaN(el))) {
            console.error(`Данные должны быть числами, вы ввели: «${data}»`);
            process.exit(0);
        }
        if (!(logCount >= 1 && logCount <= 2 * Math.pow(10, 5) && slicesCount >= 0 && slicesCount <= Math.pow(10, 9))) {
            console.error(`Данные должны быть в диапозоне: 1⩽N⩽2⋅10^5, 0⩽K⩽10^9`);
            process.exit(0);
        }

        lineCounter++;
        return;
    }

    if (lineCounter === 1) {
        const logsLength = data.split(' ').map(el => Number(el));

        // Гуардим пользовательский ввод
        if (logsLength.length !== logCount) {
            console.error(`
                Количество бревен отличается,
                от фактически переданных: «${logsLength}» и «${logCount}»
                `);
            process.exit(0);
            return;
        }
        if (!logsLength.every(el => typeof (el) === 'number' && !isNaN(el))) {
            console.error(`Данные должны быть числами, вы ввели: «${data}»`);
            process.exit(0);
        }

        console.log(getMinLength(logsLength, slicesCount));
        process.exit(0);
    }
});

function getMinLength(logs, slicesCount) {
    if (slicesCount === 0) {
        return prepareResult(logs);
    }

    let sortedLogs = sortArray(logs);

    for(let i = 0; i < slicesCount; i) {
        const curDivisor = getDivisorValue(sortedLogs[0], sortedLogs[1], slicesCount - i);
        if ((curDivisor - 1) + i <= slicesCount) {
            i += curDivisor - 1;
            // тут нужно еще гвардить математические операции,
            // потому что может случится «0.300000004»
            // но в данном случае мы это опустим
            // хоть мы в конце и округляем
            // но это может сыграть роль
            for (let a = 0; a < curDivisor; a++) {
                sortedLogs.push(sortedLogs[0] / curDivisor)
            }
            sortedLogs = sortedLogs.slice(1);
            sortedLogs = sortArray(sortedLogs);
        } else {
            break;
        }
    }

    return prepareResult(sortedLogs);


    function getDivisorValue(num1, num2, availableSlices) {
        let divisorCounter = 2;
``
        while (true) {
            if (num1 / divisorCounter > num2 / 2 && divisorCounter - 1 < availableSlices) {
                divisorCounter++;
            } else {
                break;
            }
        }

        return divisorCounter
    }
    function sortArray(arr) {
        return arr.sort((a,b) => a - b).reverse();
    }
    function prepareResult(array) {
        return Math.ceil(Math.max(...array));
    }
}

rl.on('close', function () {
    process.exit(0);
});