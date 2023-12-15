import styled from 'styled-components';
import { useState, useEffect } from 'react';
import createSelectTimes from '../../utils/createSelectTimes';
function PlanModal({
  isOpenModal,
  setIsOpenModal,
  defaultDate,
  days,
  setPlans,
}) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [title, setTitle] = useState('');
  const times = createSelectTimes();

  const onSubmitClick = (e) => {
    setPlans((plans) => [
      ...plans,
      {
        day: selectedDay,
        startIndex: startIndex,
        endIndex: endIndex,
        title: title,
      },
    ]);
    setIsOpenModal(false);
    setStartIndex(0);
    setEndIndex(0);
    setTitle('');
  };

  useEffect(() => {
    console.log('날짜', '시작시간', '종료시간');
    console.log(selectedDay, startIndex, endIndex);
  }, [startIndex, endIndex, selectedDay]);
  return (
    <ModalWrapper isopen={isOpenModal}>
      <button onClick={() => setIsOpenModal(false)}>닫기</button>
      <div>
        <p>날짜</p>
        <select
          name="selectDay"
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((day, index) => (
            <option key={index} value={index}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>시간</p>
        <select
          name="startTime"
          onChange={(e) => setStartIndex(e.target.value)}
          value={startIndex}
        >
          {times.map((time, index) => (
            <option key={index} value={index}>
              {time.text}
            </option>
          ))}
        </select>
        <select
          name="endTime"
          onChange={(e) => setEndIndex(e.target.value)}
          value={endIndex}
        >
          {times.slice(startIndex).map((time, index) => (
            <option key={index} value={index}>
              {time.text}
            </option>
          ))}
        </select>
        <p> 내용 </p>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <button onClick={onSubmitClick}> 만들기 </button>
    </ModalWrapper>
  );
}
export default PlanModal;

const ModalWrapper = styled.div`
  width: 364px;
  height: 475px;
  background-color: aliceblue;
  padding: 20px;
  display: ${(props) => (props.isopen === true ? 'fixed' : 'none')};
  position: absolute;
  top: 100px;
  left: 200px;
  z-index: 4;
`;
