function getMonthName(monthNumber) {
    const monthNames = new Map();
    monthNames.set(1, 'Jan');
    monthNames.set(2, 'Feb');
    monthNames.set(3, 'Mar');
    monthNames.set(4, 'Apr');
    monthNames.set(5, 'May');
    monthNames.set(6, 'Jun');
    monthNames.set(7, 'Jul');
    monthNames.set(8, 'Aug');
    monthNames.set(9, 'Sep');
    monthNames.set(10, 'Oct');
    monthNames.set(11, 'Nov');
    monthNames.set(12, 'Dec');
    return (monthNames.get(monthNumber));
}

const calculateRewards = (amount) => {
    return amount <= 50 ? 0 : amount > 100 ? (amount - 100) * 2 + 50 : amount - 50;
};

const processTransactions = (data) => {
    // Calculate points, assign month year and key for each transaction

    return data.map((txn) => ({
        ...txn,
        reward: calculateRewards(txn.price),
        month: new Date(txn.purchased_date).getMonth() + 1,
        year: new Date(txn.purchased_date).getFullYear(),
        key: `${txn.customer_id}-${new Date(txn.purchased_date).getFullYear()}-${new Date(txn.purchased_date).getMonth() + 1}`

    }));
}

//filter transactions for the given date range if range is not provided last 3 months
const setTransactions = (data, from, to) => {
    var resultProductData = data.filter(a => {
        return (a.reward > 0);
    })
    var fromDate = new Date(from);
    var toDate = new Date(to);
    if ((from === null || from === undefined) && (to === null || to === undefined)) {
        toDate = new Date();
        fromDate = new Date();
        fromDate.setMonth(toDate.getMonth() - 3);

    }

    resultProductData = resultProductData.filter(a => {
        var date = new Date(a.purchased_date);
        return (date >= fromDate && date <= toDate);
    });

    return (resultProductData);
}

const rewardSummary = (data) => {

    var result = [];

    data.reduce(function (res, value) {
        if (!res[value.key]) {
            res[value.key] = { key: value.key, reward: 0 };
            result.push(res[value.key])
        }
        res[value.key].reward += value.reward;
        res[value.key].customer_id = value.customer_id;
        res[value.key].customer_name = value.customer_name;
        res[value.key].month = getMonthName(value.month);
        res[value.key].year = value.year;
        res[value.key].key = value.key
        return res;
    }, {});

    return result;

}

const rewardSummaryTotal = (data) => {

    var result = [];


    data.reduce(function (res, value) {
        if (!res[value.customer_id]) {
            res[value.customer_id] = { customer_id: value.customer_id, reward: 0 };
            result.push(res[value.customer_id])
        }
        res[value.customer_id].reward += value.reward;
        res[value.customer_id].customer_id = value.customer_id;
        res[value.customer_id].customer_name = value.customer_name;
        res[value.customer_id].month = getMonthName(value.month);
        res[value.customer_id].year = value.year;
        return res;
    }, {});

    return result;

}




module.exports = { calculateRewards, processTransactions, rewardSummary, rewardSummaryTotal, setTransactions };