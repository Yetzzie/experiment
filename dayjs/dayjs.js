import isWeekend from '../dayjs2/dayjsIsWeekend.js';
import {date} from '../dayjs2/dayjsIsWeekend.js';

const adddedDate = date.add(5, 'day');
const adddedDateMonths = date.add(1, 'M');
const subtractDate = date.subtract(1, 'M');


// this is we add 5 days
document.querySelector('.js-date').textContent = adddedDate.format('MMMM DD, YYYY');
console.log(adddedDate.format('MMMM DD, YYYY'));

//this is we added 1 month in date
document.querySelector('.js-date2').textContent = adddedDateMonths.format('MMMM DD, YYYY');

//this is we subtract the date today
document.querySelector('.js-date3').textContent = subtractDate.format('MMMM DD, YYYY');

//this were we enter if is either monday tuesday or sunday etc. In the date today
document.querySelector('.js-date4').textContent = date.format('dddd');

//this is i use function when i change the number it will return monday tuesday or sunday etc. In the date today
document.querySelector('.js-date5').textContent = isWeekend(10);
