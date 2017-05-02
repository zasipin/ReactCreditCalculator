export function setCreditSum(sum) {
    sum = sum >= 0 ? sum : 0;
    return {
        type: 'SET_CREDIT_SUM',
        sum
    }
}

export function setPercents(percents) {
    percents = percents >= 0 ? percents : 0;
    return {
        type: 'SET_PERCENTS',
        percents
    }
}