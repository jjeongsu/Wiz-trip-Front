import React, {useState} from 'react'
import * as U from '../../styles/updateplan.style'
import PlaceList from '../PlaceList';
import DateModal from '../DateModal';
import dayjs from 'dayjs';
function UpdatePlanInfo({setUpdateForm, planinfo, setPlanInfo}) {
    const [placeInput, setPlaceInput] = useState(planinfo.location);
    const [StartDate, setStartDate] = useState(planinfo.startDate);
    const [EndDate, setEndDate] = useState(planinfo.endDate);
    const [isActive, setIsActive] = useState({
      location: false,
      sdate: false,
      edate: false,
    });

    const toggleLocation = () => {
        setIsActive({ location: !isActive.location, sdate: false, edate:false });
      };
    
    const toggleSdates = () => {
    setIsActive({ location: false, sdate: !isActive.sdate, edate: false });
    };

    const toggleEdates = () => {
    setIsActive({ location: false, sdate: false, edate: !isActive.edate });
    };

    const handleInput = (e) => {
    setPlaceInput(e.target.value);
        if(placeInput.length>0){
            setIsActive({...isActive, location: true});
        }
    }
    const handleSubmit = () => {
        if (dayjs(EndDate).isBefore(dayjs(StartDate), 'day')) {
            alert('종료날짜는 시작날짜보다 같거나 그 이후여야 합니다.');
            return;
          }
    
          let data = {
            location: placeInput,
            startDate: StartDate,
            endDate: EndDate
          }
          //서버 API 요청 코드 추가 
          console.log(data);
          setPlanInfo({...planinfo, location: placeInput, startDate: StartDate, endDate: EndDate});
          console.log(planinfo)
          setUpdateForm(false);


    }
  return (
    <>
    <U.PlanInfoLayout>
        <U.TextBox>
            <span className='top-label'>여행지수정</span>
            <input name='place' type="text" className='input-container' value={placeInput} onClick={toggleLocation} onChange={handleInput}></input>
        </U.TextBox>
        <div className='vertical-line'/>
        <U.TextBox >
            <span className='top-label'>시작날짜수정</span>
            <input className='input-container' value={StartDate} readOnly onClick={toggleSdates} required></input>
        </U.TextBox>
        <div className='vertical-line'/>
        <U.TextBox >
            <span className='top-label'>종료날짜수정</span>
            <input className='input-container' value={EndDate} readOnly onClick={toggleEdates}required></input>
        </U.TextBox>
        <U.ReviseBtn onClick={handleSubmit}>수정완료</U.ReviseBtn>
    </U.PlanInfoLayout>

    {isActive.location && <PlaceList placeInput={placeInput} setPlaceInput={setPlaceInput} toggleLocation={toggleLocation} layout='update'/>}
    {isActive.sdate && <DateModal date={StartDate} setDate={setStartDate} toggledates={toggleSdates} layout='update'/>}
    {isActive.edate && <DateModal date={EndDate} setDate={setEndDate} toggledates={toggleEdates} layout='update'/>}
    </>
  )
}

export default UpdatePlanInfo