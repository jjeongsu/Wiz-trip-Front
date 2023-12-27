import { hours24 } from './HoursAday';

export default function createSelectTimes() {
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
