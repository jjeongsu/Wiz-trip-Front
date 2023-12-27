import { useActionData } from 'react-router-dom';
import * as S from '../../styles/planboard.style';
import createSelectTimes from '../../utils/createSelectTimes';
import { hours24 } from '../../utils/HoursAday';
import { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import AddPlanIcon from '../../assets/add-plan-icon';
function PlanBoard({ days, setIsOpenModal, setDefaultDate, plans }) {
  const times = createSelectTimes();

  //react-grid-layout 관련 설정
  const defaultProps = {
    cols: 3,
    verticalCompact: false,
    preventCollision: true,
  };
  // const layout = [
  //   // { i: 'a', x: 0, y: 0, w: 1, h: 5, static: false },
  //   // { i: 'b', x: 1, y: 20, w: 1, h: 5 },
  //   // { i: 'c', x: 2, y: 10, w: 1, h: 10 },
  // ];
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
                {day}
                <button
                  className="add-plan-button"
                  onClick={() => {
                    setIsOpenModal(true);
                    setDefaultDate(day);
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
              {/* {plans
                .filter((plan, v) => ~~plan.day === dayi)
                .map((plan, i) => {
                  const top = 18 + 12 * plan.startIndex;
                  const height = 12 * plan.endIndex;
                  return (
                    <S.Schedule key={i} top={top} height={height}>
                      {plan.title}
                    </S.Schedule>
                  );
                })} */}
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
          return <S.Schedule key={index.toString()}>{p.title}</S.Schedule>;
        })}
      </GridLayout>
    </S.BoardBox>
  );
}
export default PlanBoard;
