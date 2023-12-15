import { useActionData } from 'react-router-dom';
import * as S from '../../styles/planboard.style';
import createSelectTimes from '../../utils/createSelectTimes';
import { hours24 } from '../../utils/HoursAday';
import { useEffect } from 'react';
import GridLayout from 'react-grid-layout';
function PlanBoard({ days, setIsOpenModal, setDefaultDate, plans }) {
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
      <div className="schedule-table">
        {days.map((day, dayi) => (
          <div className="oneday-schedule" key={dayi}>
            <div className="gap">
              <div className="board-header"></div>
              {hours24.map((time, timei) => (
                <div className="gap-entity" key={timei}></div>
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
              {times.map((time, timei) => (
                <div className="minute-entity" key={timei}>
                  {' '}
                </div>
              ))}
              {plans
                .filter((plan, v) => ~~plan.day === dayi)
                .map((plan, i) => {
                  const top = 18 + 12 * plan.startIndex;
                  const height = 12 * plan.endIndex;
                  return (
                    <S.Schedule key={i} top={top} height={height}>
                      {plan.title}
                    </S.Schedule>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </S.BoardBox>
  );
}
export default PlanBoard;
