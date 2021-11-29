let readline = require('readline');

let rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let splittedData;


rl.on('line', function (data) {
    splittedData = data.split(' ').map(el => +el);
});

rl.on('close', function () {
    const [piecesCount] = splittedData;
    if (+piecesCount === 1) {
        console.log(0)
        process.exit(0);
        return;
    }
    const knifeActions = (function() {
        let actionsCount = 0;

        return function knife(pieces) {
            if (pieces.every(el => el === 1)) return actionsCount
            actionsCount++;
            return knife(pieces.map(el => {
                const slicedPart = Math.floor(el / 2)
                if (el !== 1) return [slicedPart, slicedPart + el % 2]
                return el;
            }).flat())
        }
    })()([piecesCount]);

    console.log(knifeActions);

    process.exit(0);
});