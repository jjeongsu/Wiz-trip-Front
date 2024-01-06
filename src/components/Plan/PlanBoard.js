import { useActionData } from 'react-router-dom';
import * as S from '../../styles/planboard.style';
import { createSelectTimes } from '../../utils/createSelectTimes';
import { hours24 } from '../../utils/HoursAday';
import { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import AddPlanIcon from '../../assets/add-plan-icon';
import PlanDetailCard from './PlanDetailCard';
function PlanBoard({ days, setIsOpenModal, setDefaultDate, plans }) {
  const times = createSelectTimes();

  //react-grid-layout 관련 설정
  const defaultProps = {
    cols: 3,
    verticalCompact: false,
    preventCollision: true,
  };

  const [mylayout, setMyLayout] = useState([]);
  // { i: 'random', x: plans.day, y: palns.startIndex, w:1, h: ~~endIndex, static: false }
  useEffect(() => {
    const l = [];
    plans.forEach((p, index) => {
      const newPlan = {
        i: index.toString(),
        x: ~~p.day,
        y: ~~p.startIndex,
        w: 1,
        h: ~~p.endIndex,
      };
      l.push(newPlan);
    });
    setMyLayout((layout) => [...layout, ...l]);
  }, [plans]);
  console.log('계획들', plans);
  console.log('layout 배열', mylayout);

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
      <GridLayout
        className="grid-drag-board"
        cols={3}
        rowHeight={12}
        width={728}
        preventCollision={true}
        verticalCompact={false}
        margin={[24, 0]}
        layout={mylayout}
      >
        {plans?.map((p, index) => {
          return (
            <div key={index.toString()}>
              <PlanDetailCard
                address="서울시 강남구"
                content={p.content}
                category={p.category}
                userId="1"
              />
            </div>
          );
        })}
      </GridLayout>
    </S.BoardBox>
  );
}
export default PlanBoard;
