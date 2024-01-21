function create24HoursAday() {
  const hours = [];
  for (let i = 0; i < 12; i++) {
    const hour = i;
    const item = {
      text: `오전 ${i === 0 ? 12 : i}`,
      hour,
      hour_eng: `${i === 0 ? 12 : i}AM`,
    };
    hours.push(item);
  }
  for (let i = 0; i < 12; i++) {
    const hour = i === 0 ? 12 : i + 12;
    const item = {
      text: `오후 ${i === 0 ? 12 : i}`,
      hour,
      hour_eng: `${i === 0 ? 12 : i}PM`,
    };
    hours.push(item);
  }
  return hours;
}

function create24HoursClock() {
  const hours = [];
  for (let i = 0; i < 10; i++) {
    const hour = '0' + i;
    const item = {
      hour,
    };
    hours.push(item);
  }
  for (let i = 10; i < 24; i++) {
    const hour = i;
    const item = {
      hour,
    };
    hours.push(item);
  }
  return hours;
}
export const hours24 = create24HoursAday();

export const hours24Clock = create24HoursClock();
