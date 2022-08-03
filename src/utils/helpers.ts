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

    const dayFormat: { [key: number]: string } = {
        0: 'th',
        1: 'st',
        2: 'nd',
        3: 'rd',
        4: 'th',
        5: 'th',
        6: 'th',
        7: 'th',
        8: 'th',
        9: 'th'
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
            day = `${day}${dayFormat[key]}`;
            if (day.startsWith('0')) {
                day = `${day.replace('0', '')}`;
                return `${month} ${day}`;
            }
            if (day.includes('11st')) {
                day = `${day.replace('st', 'th')}`;
                return `${month} ${day}`;
            }
            return `${month} ${day}`;
        }
    }
    return splitDate.toString();
};

/**
 * Double number format.
 *
 * @return string
 * @params string | number
 */
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
    const h = appendZero(d.getHours());
    const m = appendZero(d.getMinutes());
    const time = `${h}:${m}`;
    return time;
};

/**
 * Capitalize first letter.
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

/**
 * Replace Jyvaskyla with Jyväskylä.
 *
 * @params string
 * @return string
 */
export const normaliseJyvaskyla = (city: string) => {
    if (typeof city === 'string') {
        if (city.toLowerCase() === 'jyvaskyla') return city.replace(city, 'Jyväskylä');
    } else {
        throw new Error('Invalid argument type!');
    }
    return city;
};
