import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const date = dayjs();
export default function isWeekend(dates) {
  let changeDate = date.add(dates, 'day').format('dddd');
  
  return changeDate === 'Saturday' || changeDate === 'Sunday';
  }