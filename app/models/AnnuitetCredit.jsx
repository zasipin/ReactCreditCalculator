export class AnnuitetCredit{
    state = {}

    static ToPercents = 100;

    constructor(sum = 0, percents = 0, months = 0){
        this.state = {
            sum,
            months,
            percents,
            annuitetCoefficient: 0,
            monthlyPay: 0,
            totalPay: 0,
            overpay: 0,
            overpayPercentage: 0
        };
        return this.recalculate(this.state.sum, this.state.percents);
    }

    recalculate(sum, percents) {
            var monthlyPercent = percents / 12 / AnnuitetCredit.ToPercents;
            var power = Math.pow((1 + monthlyPercent), this.state.months);
            var state = this.state;
            state.annuitetCoefficient = monthlyPercent * power / (power - 1);
            state.monthlyPay = sum * state.annuitetCoefficient;
            state.totalPay = state.monthlyPay * state.months;
            state.overpay = state.totalPay - sum;
            state.overpayPercentage = (state.overpay / sum) * AnnuitetCredit.ToPercents;                 
        return this;
    }

    getData(){
        return this.state;
    }
} 

