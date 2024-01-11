import { useActionData } from 'react-router-dom';
import * as S from '../../styles/planboard.style';
import { createSelectTimes } from '../../utils/createSelectTimes';
import { hours24 } from '../../utils/HoursAday';
import { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import AddPlanIcon from '../../assets/add-plan-icon';
import PlanDetailCard from './PlanDetailCard';
import { clockTimes } from '../../utils/createSelectTimes';
import { useSelector } from 'react-redux';
function PlanBoard({
  days,
  setIsOpenModal,
  setDefaultDate,
  setCurrentSpot,
  plans,
}) {
  const times = createSelectTimes();

  const [mylayout, setMyLayout] = useState([]);
  // { i: 'random', x: plans.day, y: palns.startIndex, w:1, h: ~~endIndex, static: false }
  useEffect(() => {
    const l = [];
    plans.forEach((p, index) => {
      //timestamp를 index로 변환하기
      const today = p.startTime?.slice(0, 10);
      const todayIndex = days.findIndex((date) => date.date_full === today);
      const trim_startTime = p.startTime?.slice(11);
      const trim_endTime = p.finishTime?.slice(11);
      const startIndex = clockTimes.findIndex(
        (time) => time.text === trim_startTime,
      );
      const endIndex = clockTimes.findIndex(
        (time) => time.text == trim_endTime,
      );
      const gap = ~~endIndex - ~~startIndex;
      const newPlan = {
        i: index.toString(),
        x: ~~todayIndex,
        y: ~~startIndex,
        w: 1,
        h: gap,
      };
      l.push(newPlan);
    });
    setMyLayout((layout) => [...layout, ...l]);
  }, [plans]);

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
        {days &&
          days.map((day, dayi) => (
            <div className="oneday-schedule" key={dayi}>
              <div className="gap">
                <div className="board-header"></div>
                {hours24.map((time, timei) => (
                  <div className="gap-entity" key={timei}></div>
                ))}
              </div>
              <div className="contents">
                <div className="board-header">
                  {day.date_trimed} <strong> {day.day}</strong>
                  <button
                    className="add-plan-button"
                    onClick={() => {
                      setIsOpenModal(true);
                      setDefaultDate(day.date_trimed);
                    }}
                  >
                    <AddPlanIcon />
                  </button>
                </div>
                {times.map((time, timei) => (
                  <div className="minute-entity" key={timei}>
                    {' '}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      {mylayout && (
        <GridLayout
          className="grid-drag-board"
          cols={3}
          rowHeight={12}
          width={728}
          preventCollision={true}
          compactType={null}
          margin={[24, 0]}
          layout={mylayout}
        >
          {plans?.map((p, index) => {
            return (
              <div key={index.toString()}>
                <PlanDetailCard
                  address={p.address}
                  content={p.content}
                  category={p.category}
                  userId={p.userId}
                  setCurrentSpot={setCurrentSpot}
                  planId={p.planId}
                  tripId={p.tripId}
                />
              </div>
            );
          })}
        </GridLayout>
      )}
    </S.BoardBox>
  );
}
export default PlanBoard;
