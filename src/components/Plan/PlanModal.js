import styled from 'styled-components';
import { useState, useEffect } from 'react';
import createSelectTimes from '../../utils/createSelectTimes';
import CloseIcon from '../../assets/close-icon';
import * as M from '../../styles/planmodal.style';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { createDatesArr } from '../../utils/createDaysArr';
import { categoryToEng } from '../../assets/category-palette';
function PlanModal({
  isOpenModal,
  setIsOpenModal,
  defaultDate,
  days,
  setPlans,
}) {
  const times = createSelectTimes();
  //days정보 -> schedule redux에서 가져오기
  const schedules = useSelector((state) => state.schedule);
  const n_days = createDatesArr({ ...schedules });
  console.log('모달 days', n_days);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    clearErrors,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
    //
    setPlans((plans) => [
      ...plans,
      {
        day: data.selectDay,
        startIndex: data.startTime,
        endIndex: data.endTime,
        content: data.content,
        category: categoryToEng[data.category],
      },
    ]);
    setIsOpenModal(false);
    reset({
      selectDay: 0,
      startTiem: '',
      endTime: 0,
      content: '',
      category: '',
      place: '',
    });
  };

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
              <input {...register('place')} />
            </div>

            <div className="field">
              <p className="label">시간</p>
              <div>
                <M.Selecter
                  className="seleter"
                  name="selectDay"
                  {...register('selectDay', { required: true })}
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
                  {...register('startTime', { required: true })}
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
                  {...register('endTime', { required: true })}
                >
                  {times.slice(watch('startTime')).map((time, index) => (
                    <option key={index} value={index}>
                      {time.text}
                    </option>
                  ))}
                </M.Selecter>
              </div>
            </div>

            <div className="field">
              <p className="label">카테고리</p>
              <M.Selecter
                name="category"
                {...register('category', { required: true })}
              >
                {['음식', '숙소', '관광', '기타'].map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </M.Selecter>
            </div>

            <div className="field">
              <p className="label"> 내용 </p>
              <textarea
                name="content"
                {...register('content', { required: true })}
              />
            </div>
          </M.FormWrapper>
          <button className="submit-button">완료</button>
        </form>
      </M.ModalWrapper>
      <M.ModalBackground isopen={isOpenModal}>{''}</M.ModalBackground>
    </div>
  );
}
export default PlanModal;
