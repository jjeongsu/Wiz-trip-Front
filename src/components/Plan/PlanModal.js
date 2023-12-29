import styled from 'styled-components';
import { useState, useEffect } from 'react';
import createSelectTimes from '../../utils/createSelectTimes';
import CloseIcon from '../../assets/close-icon';
import * as M from '../../styles/planmodal.style';
import { useForm } from 'react-hook-form';
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
  //days정보 -> schedule redux에서 가져오기
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

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
  const onSubmit = () => {};
  useEffect(() => {
    console.log('날짜', '시작시간', '종료시간');
    console.log(selectedDay, startIndex, endIndex);
  }, [startIndex, endIndex, selectedDay]);
  return (
    <div>
      <M.ModalWrapper isopen={isOpenModal}>
        <button
          className="close-modal-button"
          onClick={() => setIsOpenModal(false)}
        >
          <CloseIcon width="19" height="19" fill="#6446ff" />
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <M.FormWrapper>
            <div className="field">
              <p className="label">장소</p>
              <input />
            </div>

            <div className="field">
              <p className="label">시간</p>
              <div>
                <M.Selecter
                  className="seleter"
                  name="selectDay"
                  onChange={(e) => setSelectedDay(e.target.value)}
                >
                  {days.map((day, index) => (
                    <option key={index} value={index}>
                      {day}
                    </option>
                  ))}
                </M.Selecter>
                <br />
                <M.Selecter
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
                </M.Selecter>
                <span> ~ </span>
                <M.Selecter
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
                </M.Selecter>
              </div>
            </div>

            <div className="field">
              <p className="label">카테고리</p>
              <M.Selecter>
                {['음식', '숙소', '관광', '기타'].map((category, index) => (
                  <option key={index}>{category}</option>
                ))}
              </M.Selecter>
            </div>

            <div className="field">
              <p className="label"> 내용 </p>
              <textarea
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
          </M.FormWrapper>
          <button className="submit-button" onClick={onSubmitClick}>
            완료
          </button>
        </form>
      </M.ModalWrapper>
      <M.ModalBackground isopen={isOpenModal}>{''}</M.ModalBackground>
    </div>
  );
}
export default PlanModal;
