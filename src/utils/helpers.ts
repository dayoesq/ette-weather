/**
 * Format date to localeDateString.
 *
 * @return string
 * @params Date | string | number
 */
export const getDateTime = (
    date: Date | string | number,
    options = 'en-FI'
): string => {
    const formattedDate = new Date(date).toLocaleDateString(options, {
        month: 'short',
        day: '2-digit'
    });

    const dayFormat: { [key: string]: string } = {
        '0': 'th',
        '1': 'st',
        '2': 'nd',
        '3': 'rd'
    };

    let splitDate = formattedDate
        .split(' ')
        .reverse()
        .toString()
        .replace(',', ' ')
        .split(' ');

    for (let key in dayFormat) {
        let [month, day] = splitDate;
        if (day.endsWith(key)) {
            day += dayFormat[key];
            return `${month} ${day}`;
        } else {
            day += dayFormat[key];
            return `${month} ${day}`;
        }
    }
    return splitDate.toString();
};

const appendZero = (i: string | number) => {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
};

/**
 * Format date to localeDateString.
 *
 * @return string
 * @params Date | string | number
 */
export const getHourMinute = (date: Date | string | number): string => {
    const d = new Date(date);
    let h = appendZero(d.getHours());
    let m = appendZero(d.getMinutes());
    let time = h + ':' + m;
    return time;
};

/**
 * Capitalize words.
 *
 * @params string
 * @return string
 */
export const capitalizeFirstLetter = (words?: string) => {
    if (typeof words === 'string') {
        return words.charAt(0).toUpperCase() + words.slice(1);
    } else {
        throw new Error('Invalid argument type!');
    }
};
