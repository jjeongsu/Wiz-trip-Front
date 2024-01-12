import { hours24, hours24Clock } from './HoursAday';

export function createSelectTimes() {
  //오전, 오후가 나뉘어진 시간배열
  const minutes = ['00', '15', '30', '45'];
  const times = [];

  hours24.forEach((h) => {
    minutes.forEach((m) => {
      times.push({
        hour: h.hour,
        minute: m,
        text: `${h.text}:${m}`,
      });
    });
  });

  return times;
}
export function createClockTimes() {
  //24시간제로 표기된 시간배열
  const minutes = ['00', '15', '30', '45'];
  const times = [];

  hours24Clock.forEach((h) => {
    minutes.forEach((m) => {
      times.push({
        hour: h.hour,
        minute: m,
        text: `${h.hour}:${m}`,
      });
    });
  });

  return times;
}

export const clockTimes = createClockTimes();
