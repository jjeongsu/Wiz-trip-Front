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

export const hours24 = create24HoursAday();
