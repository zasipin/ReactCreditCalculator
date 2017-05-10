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

export function addMonthsItem(sum, percents, months) {
    months = months > 0 ? months : 12;
    return {
        type: 'ADD_MONTHS',
        sum, 
        percents,
        months
    }
}