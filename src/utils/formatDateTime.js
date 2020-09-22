/**
 *
 * @param {String} datetime
 * @param {String} type
 */
const formatDateTime = (datetime, type) => {
    const newDate = new Date(datetime);
    const yyyy = newDate.getFullYear();
    const yyyyStr = `${yyyy}`;
    const mm = newDate.getMonth() + 1;
    const mmStr = `${mm < 10 ? `0` : ``}${mm}`;
    const dd = newDate.getDate();
    const ddStr = `${dd < 10 ? `0` : ``}${dd}`;

    switch (type) {
        case 'YYYY-MM-DD':
            // 2020-02-26
            return `${yyyyStr}-${mmStr}-${ddStr}`;

        case 'MM/DD/YYYY':
            // 02/26/2020
            return `${mmStr}/${ddStr}/${yyyyStr}`;

        default:
            // 2020-02-26
            return `${yyyyStr}-${mmStr}-${ddStr}`;
    }
};

export default formatDateTime;
