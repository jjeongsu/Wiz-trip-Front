import React, {useState} from 'react'
import * as P from '../../styles/planactive.style'
import PlaceList from './PlaceList';
import dayjs from 'dayjs';
import districtData from '../../administrative_district.json';
import DateModal from './DateModal';

// eslint-disable-next-line react/prop-types
function PlanActiveBox({setInputPlan}) {
  const [placeInput, setPlaceInput] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [isActive, setIsActive] = useState({
    location: false,
    sdate: false,
    edate: false,
  });

  const filteredList = districtData.filter(district =>
    district.includes(placeInput)
  ); 

  const toggleLocation = () => {
    setIsActive({ location: !isActive.location, sdate: false, edate:false });
  };

  const toggleSdates = () => {
    setIsActive({ location: false, sdate: !isActive.sdate, edate: false });
  };

  const toggleEdates = () => {
    setIsActive({ location: false, sdate: false, edate: !isActive.edate });
  };


  const handleSubmit = () => {
      // 여행지, 시작날짜, 종료날짜가 모두 입력되었는지 확인
      if (!placeInput || !StartDate || !EndDate) {
        alert('모든 필드를 입력해주세요.');
        return;
      }
  
      if (dayjs(EndDate).isBefore(dayjs(StartDate), 'day')) {
        alert('종료날짜는 시작날짜보다 같거나 그 이후여야 합니다.');
        return;
      }

      let data = {
        place: placeInput,
        startdate: StartDate,
        enddate: EndDate
      }

      console.log(data);

   
  }

  const handleInput = (e) => {
    setPlaceInput(e.target.value);
    if(placeInput.length>0){
      setIsActive({...isActive, location: true});
    }
  }


 
  return (
    <>
    <P.Overlay onClick={()=>{setInputPlan(false)}}/> 
    <P.BoxLayout>

      <P.TextBox $visible={isActive.location? 'true': 'false'}>
        <span className='top-label'>여행지</span>
        <input name='place' type="text" className='input' placeholder='여행지 추가' value={placeInput} onChange={handleInput} onClick={toggleLocation} required></input>
      </P.TextBox>
     
      <P.VerticalLine/>
      <P.TextBox $visible={isActive.sdate? 'true': 'false'}>
        <span className='top-label'>시작날짜</span>
        <input className='input' placeholder='날짜추가' value={StartDate} readOnly onClick={toggleSdates} required></input>
      </P.TextBox>
      <P.VerticalLine/>
      <P.TextBox  $visible={isActive.edate? 'true': 'false'}>
        <span className='top-label'>종료날짜</span>
        <input className='input' placeholder='날짜추가' value={EndDate} readOnly onClick={toggleEdates} required></input>
      </P.TextBox>
      <P.SubmitButton onClick={handleSubmit}>계획 시작하기</P.SubmitButton>
     

    </P.BoxLayout>
    {isActive.location && <PlaceList filteredList={filteredList} setPlaceInput={setPlaceInput} toggleLocation={toggleLocation}/>}
    {isActive.sdate && <DateModal date={StartDate} setDate={setStartDate} toggledates={toggleSdates}/>}
    {isActive.edate && <DateModal date={EndDate} setDate={setEndDate} toggledates={toggleEdates}/>}
     
   
   
    
     
      </>
    )
  }

export default PlanActiveBox;

