import styled from 'styled-components';
import { useState, useEffect } from 'react';
import createSelectTimes from '../../utils/createSelectTimes';
import CloseIcon from '../../assets/close-icon';
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
      <div></div>
      <button onClick={() => setIsOpenModal(false)}>
        <CloseIcon width="19" height="19" fill="#6446ff" />
      </button>
      <div>
        <p className="label">날짜</p>
        <Selecter
          className="seleter"
          name="selectDay"
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((day, index) => (
            <option key={index} value={index}>
              {day}
            </option>
          ))}
        </Selecter>
      </div>
      <div>
        <p className="label">시간</p>
        <Selecter
          className="seleter"
          name="startTime"
          onChange={(e) => setStartIndex(e.target.value)}
          value={startIndex}
        >
          {times.map((time, index) => (
            <option key={index} value={index}>
              {time.text}
            </option>
          ))}
        </Selecter>
        <span> ~ </span>
        <Selecter
          className="seleter"
          name="endTime"
          onChange={(e) => setEndIndex(e.target.value)}
          value={endIndex}
        >
          {times.slice(startIndex).map((time, index) => (
            <option key={index} value={index}>
              {time.text}
            </option>
          ))}
        </Selecter>
        <p className="label"> 내용 </p>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <button className="submit-button" onClick={onSubmitClick}>
        {' '}
        완료{' '}
      </button>
    </ModalWrapper>
  );
}
export default PlanModal;

const ModalWrapper = styled.div`
  width: 364px;
  height: 475px;
  background-color: #fff;
  padding: 20px;
  display: ${(props) => (props.isopen === true ? 'fixed' : 'none')};
  position: absolute;
  top: 100px;
  left: 200px;
  z-index: 4;
  border-radius: 27px;
  border: 1px solid #e8ebed;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  input {
    width: 193px;
    height: 84px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.background};
    border: none;
  }
  .label {
    font-size: 14px;
    font-weight: 500;
  }

  .submit-button {
    width: 88px;
    height: 30px;
    background-color: ${({ theme }) => theme.mainAccentColor};
    border-radius: 16px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
  }
`;

const Selecter = styled.select`
  width: 100px;
  height: 30px;
  padding: 7px 19px;
  appearance: none;
  font-size: 12px;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 5px;
`;
