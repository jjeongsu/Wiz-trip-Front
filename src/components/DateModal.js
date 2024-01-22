import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import * as p from '../styles/datemodal.style'
import { useSelector } from 'react-redux'
import { setStartDate, setEndDate } from '../services/schedule'
import {useDispatch} from 'react-redux';
// eslint-disable-next-line react/prop-types
function DateModal({type, toggledates, layout}) {
  const dispatch = useDispatch();
  //리덕스 스토어에서 startDate, endDate 정보 가져오기 
  const date = useSelector((state) => {
    if (type === 'start') {
      return state.Schedule.startDate === '' ? dayjs().format('YYYY-MM-DD') : state.Schedule.startDate;
    } else if (type === 'end') {
      return state.Schedule.endDate === '' ? dayjs().format('YYYY-MM-DD') : state.Schedule.endDate;
    }
  });

  const [selectDate, setSelectDate] = useState(date);
  
  const [firstarr, setfirstArr] = useState([]);
  const [secondarr, setsecondArr] = useState([]);
  const [nextMonth, setnextMonth] = useState(dayjs('YYYY-MM-DD'));

  const initArr = (d) => {
    const firstOfMonth = dayjs(d).startOf('month')
    const firstDay = firstOfMonth.day(); 
    const daysInMonth = dayjs(d).daysInMonth(); 

    return Array.from({length: firstDay+ daysInMonth},
        (v,i) => i<firstDay
        ? null //현재 인덱스(i)가 firstDay보다 작으면 해당 요소를 null로 설정
        : firstOfMonth
            .set('date', i-firstDay+1)
            .format('YYYY-MM-DD') 
            //dayjs를 사용하여 현재 월의 첫번째 날을 기준으로 'i-firstDay+1'일자의 날짜를 계산하고, 그 날짜를 'YYYY-MM-DD'형식으로 포맷되어 배열에 저장됨
    );
  }



  useEffect(()=>{
    setfirstArr(initArr(selectDate));

    const newDate = dayjs(selectDate)
      .add(1, 'month')
      .startOf('month')
      .format('YYYY-MM-DD');
    setnextMonth(newDate);

    setsecondArr(initArr(newDate));
  },[selectDate])




  const handlePrevMonth = () => {
    const newDate = dayjs(selectDate).subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
    setSelectDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = dayjs(selectDate).add(1, 'month').startOf('month').format('YYYY-MM-DD');
    setSelectDate(newDate);
  };


  const handleSelect = (v) => () =>{
    {type=='start'? dispatch(setStartDate(v)): dispatch(setEndDate(v))}
    toggledates();
  }


  if(layout=='main'){
    return (
      <div>
        <p.DateModalLayout>
          <p.Header>
          <svg style={{marginLeft: '10px'}} onClick={handlePrevMonth} width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.2375L3.81916 7.5L10 1.7625L8.09717 0L0 7.5L8.09717 15L10 13.2375Z" fill="#454C53"/>
          </svg>
          <span className='first-month'>{dayjs(selectDate).year()}년 {dayjs(selectDate).month()+1}월</span>
          <span className='second-month'>{dayjs(nextMonth).year()}년 {dayjs(nextMonth).month()+1}월</span>
          <svg onClick={handleNextMonth} width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.7625L6.18084 7.5L0 13.2375L1.90283 15L10 7.5L1.90283 0L0 1.7625Z" fill="#454C53"/>
          </svg>
          </p.Header>

          <div style={{display: 'flex', margin: '0 40px', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p.DayWrapper>
                  <li>일</li>
                  <li>월</li>
                  <li>화</li>
                  <li>수</li>
                  <li>목</li>
                  <li>금</li>
                  <li>토</li>
              </p.DayWrapper>

              <p.CalendarBoard>
                  {firstarr.map((v, i) => (
                      <div key={v ? v.toString() : `${v}${i}`}>
                      {v && (
                          <p.DateContainer >
                            <li 
                            role="presentation"
                            className={dayjs(v).isBefore(dayjs(), 'day') ? 'disabled' : date === v ? 'selected' : 'not-selected'}
                            onClick={dayjs(v).isBefore(dayjs(), 'day') ? null : handleSelect(v)}>{dayjs(v).date()}</li>
                          </p.DateContainer>
                      )}
                      </div>
                  ))}
              </p.CalendarBoard>
            </div>
    
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p.DayWrapper>
                <li>일</li>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li>토</li>
              </p.DayWrapper>

              <p.CalendarBoard>
                {secondarr.map((v, i) => (
                    <div key={v ? v.toString() : `${v}${i}`}>
                    {v && (
                      <p.DateContainer >
                          <li 
                          role="presentation"
                          className={dayjs(v).isBefore(dayjs(), 'day') ? 'disabled' : date === v ? 'selected' : 'not-selected'}
                          onClick={dayjs(v).isBefore(dayjs(), 'day') ? null : handleSelect(v)}>{dayjs(v).date()}</li>
                      </p.DateContainer>
                    )}
                    </div>
                ))}
              </p.CalendarBoard>
              </div>
          </div>
        </p.DateModalLayout>
      </div>
    )
                    
  }else{
    return(

      <p.UpdateModalLayout>
        <p.UpdateHeader>
        <svg style={{marginLeft: '10px'}} onClick={handlePrevMonth} width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13.2375L3.81916 7.5L10 1.7625L8.09717 0L0 7.5L8.09717 15L10 13.2375Z" fill="#454C53"/>
        </svg>
        <span className='first-month'>{dayjs(selectDate).year()}년 {dayjs(selectDate).month()+1}월</span>
        <span className='second-month'>{dayjs(nextMonth).year()}년 {dayjs(nextMonth).month()+1}월</span>
        <svg onClick={handleNextMonth} width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.7625L6.18084 7.5L0 13.2375L1.90283 15L10 7.5L1.90283 0L0 1.7625Z" fill="#454C53"/>
        </svg>
        </p.UpdateHeader>
        <div style={{ width: '435px', display: 'flex', flexDirection: 'row', margin: '0 15px', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <p.UpdateDayWrapper>
              <li>일</li>
              <li>월</li>
              <li>화</li>
              <li>수</li>
              <li>목</li>
              <li>금</li>
              <li>토</li>
          </p.UpdateDayWrapper>

          <p.UpdateCalendarBoard>
              {firstarr.map((v, i) => (
                  <div key={v ? v.toString() : `${v}${i}`}>
                  {v && (
                      <p.UpdateDateContainer >
                        <li 
                        role="presentation"
                        className={dayjs(v).isBefore(dayjs(), 'day') ? 'disabled' : date === v ? 'selected' : 'not-selected'}
                        onClick={dayjs(v).isBefore(dayjs(), 'day') ? null : handleSelect(v)}>{dayjs(v).date()}</li>
                      </p.UpdateDateContainer>
                  )}
                  </div>
              ))}
          </p.UpdateCalendarBoard>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
              <p.UpdateDayWrapper>
              <li>일</li>
              <li>월</li>
              <li>화</li>
              <li>수</li>
              <li>목</li>
              <li>금</li>
              <li>토</li>
              </p.UpdateDayWrapper>

              <p.UpdateCalendarBoard>
                {secondarr.map((v, i) => (
                    <div key={v ? v.toString() : `${v}${i}`}>
                    {v && (
                      <p.UpdateDateContainer >
                          <li 
                          role="presentation"
                          className={dayjs(v).isBefore(dayjs(), 'day') ? 'disabled' : date === v ? 'selected' : 'not-selected'}
                          onClick={dayjs(v).isBefore(dayjs(), 'day') ? null : handleSelect(v)}>{dayjs(v).date()}</li>
                      </p.UpdateDateContainer>
                    )}
                    </div>
                ))}
              </p.UpdateCalendarBoard>
              </div>
              </div>
      </p.UpdateModalLayout>
    )
  }
  }

  export default DateModal;