import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import * as p from '../../styles/datemodal.style'
// eslint-disable-next-line react/prop-types
function DateModal({date, setDate, toggledates}) {

  const [firstarr, setfirstArr] = useState([]);
  const [secondarr, setsecondArr] = useState([]);
  const [nextMonth, setnextMonth] = useState(dayjs('YYYY-MM-DD'));
  const initArr = (firstDay, daysInMonth, d) => {
      return Array.from({length: firstDay+ daysInMonth},
          (v,i) => i<firstDay
          ? null //현재 인덱스(i)가 firstDay보다 작으면 해당 요소를 null로 설정
          : dayjs(d)
              .startOf('month')
              .set('date', i-firstDay+1)
              .format('YYYY-MM-DD') 
              //dayjs를 사용하여 현재 월의 첫번째 날을 기준으로 'i-firstDay+1'일자의 날짜를 계산하고, 그 날짜를 'YYYY-MM-DD'형식으로 포맷되어 배열에 저장됨
      );

  }

  useEffect(()=>{
      if(date==''){
        setDate(dayjs().format('YYYY-MM-DD'))
      }
      const firstDay = dayjs(date).startOf('month').day(); 
      //해당 월의 첫번째 날이 무슨 요일인지 일요일(0)부터 토요일(6)까지의 값을 반환
      const daysInMonth = dayjs(date).daysInMonth(); //해당 월의 총 일 수 반환 
      setfirstArr(initArr(firstDay, daysInMonth, date));

  },[date, setDate])

  useEffect(()=>{
    const newDate = dayjs(date)
      .add(1, 'month') //1달 후로 이동
      .startOf('month') // 해당 월의 첫 번째 날짜를 얻음
      .format('YYYY-MM-DD');
    setnextMonth(newDate);

    setsecondArr(initArr(dayjs(newDate).startOf('month').day(), dayjs(newDate).daysInMonth(), newDate));
  }, [date])


  //이 함수는 이전 달로 이동하는 동작을 처리
  const handlePrevMonth = () => {
    const newDate = dayjs(date) //현재 선택된 날짜(selectedDay)를 기반으로 새로운 날짜를 계산
      .subtract(1, 'month') //1달 전으로 이동
      .endOf('month') //해당 월의 마지막 날짜를 얻
      .format('YYYY-MM-DD'); //날짜를 'YYYY-MM-DD' 형식의 문자열로 변환
    setDate(newDate); //선택된 날짜를 새로 계산된 날짜로 업데이트
  };
//이 함수는 다음 달로 이동하는 동작을 처리
  const handleNextMonth = () => {
    const newDate = dayjs(date)
      .add(1, 'month') //1달 후로 이동
      .startOf('month') // 해당 월의 첫 번째 날짜를 얻음
      .format('YYYY-MM-DD');
    setDate(newDate);
  };

  const handleSelect = (v) => () =>{
    setDate(v);
    toggledates();
  }


  return (
    <div>
      <p.DateModalLayout>
        <p.Header>
        <svg style={{marginLeft: '10px'}} onClick={handlePrevMonth} width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13.2375L3.81916 7.5L10 1.7625L8.09717 0L0 7.5L8.09717 15L10 13.2375Z" fill="#454C53"/>
        </svg>
        <span className='first-month'>{dayjs(date).year()}년 {dayjs(date).month()+1}월</span>
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
}

export default DateModal;