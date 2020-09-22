/**
 *
 * @param {Number} value
 */
const formatLongNumber = (value) => {
    // billion
    if (value > 1000000000) {
        return `${(value / 1000000000).toFixed(1)}B`;
    }
    // million
    if (value > 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
    }
    // thousand
    if (value > 1000) {
        return `${(value / 1000).toFixed(1)}K`;
    }

    return value;
};

export default formatLongNumber;
