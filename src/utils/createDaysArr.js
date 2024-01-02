/**
 * 스케쥴 전달 예시
 * {
 *  location : "부산 기장군"
 *  startDate : "2024-01-12"
 *  endDate: "2024-01-15"
 *  }
 */
/**  함수 반환 예시
 * [
 *  {
 *   timestamp: '2024-01-12',
 *   date: '1월 12일',
 *   day : '일 '
 *  },
 *  {
 *   timestamp: '2024-01-13',
 *   date: '1월 13일',
 *   day : '월'
 *  },
 *  ...
 * ]
 */

export function createDatesArr(scheduleState) {
  const { startDate, endDate } = scheduleState;
  const dateArray = [];
  let currentDate = new Date(startDate);
  const targetDate = new Date(endDate);
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  while (currentDate <= targetDate) {
    dateArray.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray.map((date, i) => {
    const cur_month = date.toString().slice(5, 7);
    const cur_date = date.toString().slice(8);
    const currentDay = days[new Date(date).getDay()];
    return {
      date_full: date,
      date_trimed: `${cur_month}월 ${cur_date}일`,
      day: currentDay,
    };
  });
}
