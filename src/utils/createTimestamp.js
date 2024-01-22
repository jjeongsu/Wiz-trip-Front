import { createClockTimes, clockTimes } from './createSelectTimes';

export function createTimestamp(date, startIndex, endIndex) {
  const trimedDate = date.replaceAll('-', '');
  // const times = createClockTimes();
  const startTime = clockTimes[startIndex].text;
  const rightEndIndex = ~~startIndex + ~~endIndex;
  const endTime = clockTimes[rightEndIndex].text;

  return {
    startTimestamp: `${trimedDate}T${startTime}`,
    endTimestamp: `${trimedDate}T${endTime}`,
  };
}
