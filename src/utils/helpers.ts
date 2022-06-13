/**
 * Convert Fahrenheit to Celcius.
 *
 * @return number
 * @params number
 */
export const toCelcius = (val: number) => Math.floor((val - 32) * (5 / 9));

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
    const formattedDate = new Date(date ? date : new Date()).toLocaleDateString(
        options,
        {
            day: 'numeric',
            month: 'short'
        }
    );
    return formattedDate;
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
    const d = new Date(date ? date : new Date());
    let h = appendZero(d.getHours());
    let m = appendZero(d.getMinutes());
    let time = h + ':' + m;
    return time;
};
