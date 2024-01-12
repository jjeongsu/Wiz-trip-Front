import { createClockTimes } from './createSelectTimes';

export function createTimestamp(date, startIndex, endIndex) {
  const trimedDate = date.replaceAll('-', '');
  const times = createClockTimes();
  const startTime = times[startIndex].text;
  const rightEndIndex = ~~startIndex + ~~endIndex;
  const endTime = times[rightEndIndex].text;

  return {
    startTimestamp: `${trimedDate}T${startTime}`,
    endTimestamp: `${trimedDate}T${endTime}`,
  };
}
