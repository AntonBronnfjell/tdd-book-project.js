const Money = require('./money');

class Portfolio {
    constructor () {
        this.moneys = [];
    }

    add(...moneys) {
        this.moneys = this.moneys.concat(moneys);
    }

    evaluate(currency) {
        let total = this.moneys.reduce((sum, money) => {
            return sum + this.convert(money, currency);
        }, 0);
        return new Money(total, currency);
    }

    convert(money, currency) {
        let exchangesRates = new Map();
        exchangesRates.set("EUR->USD", 1.2);
        exchangesRates.set("USD->KRW", 1100);
        if (money.currency === currency) {
            return money.amount;
        }
        let key = money.currency + "->" + currency;
        return money.amount * exchangesRates.get(key);
    }
}

module.exports = Portfolio