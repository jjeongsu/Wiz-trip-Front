import { useActionData } from 'react-router-dom';
import * as S from '../../styles/planboard.style';
import createSelectTimes from '../../utils/createSelectTimes';
import { hours24 } from '../../utils/HoursAday';
import { useEffect } from 'react';
function PlanBoard({ days, setIsOpenModal, setDefaultDate }) {
  const times = createSelectTimes();
  useEffect(() => {
    console.log(times);
  }, []);
  return (
    <S.BoardBox>
      <div className="timeline">
        <div className="board-header"> </div>
        {hours24.map((time, i) => (
          <div className="time-entity" key={i}>
            {time.hour_eng}
          </div>
        ))}
      </div>
      <div className="schedule">
        {days.map((day, i) => (
          <div className="oneday-schedule" key={i}>
            <div className="gap">
              <div className="board-header"></div>
              {hours24.map((time, i) => (
                <div className="gap-entity" key={i}></div>
              ))}
            </div>
            <div className="contents">
              <div className="board-header">
                {day}
                <button
                  onClick={() => {
                    setIsOpenModal(true);
                    setDefaultDate(day);
                  }}
                >
                  {' '}
                  추가하기
                </button>
              </div>
              {times.map((time, i) => (
                <div className="minute-entity" key={i}>
                  {' '}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </S.BoardBox>
  );
}
export default PlanBoard;
