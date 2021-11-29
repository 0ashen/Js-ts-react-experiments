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
    const [rate_price, rate_size, over_limit_price, spent] = splittedData;

    let totalPrice = rate_price;

    if (rate_size < spent) {
        totalPrice += (spent - rate_size) * over_limit_price;
    }

    console.log(totalPrice);

    process.exit(0);
});