import React, {useEffect, useState} from 'react'
import * as P from '../../styles/planactive.style'
import PlaceList from '../PlaceList';
import dayjs from 'dayjs';
import DateModal from '../DateModal';
import { useSelector, useDispatch } from 'react-redux'
import { initSchedule } from '../../services/schedule';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';
import CheckLogin from '../../utils/checklogin';
import { useNavigate } from 'react-router';
// eslint-disable-next-line react/prop-types
function PlanActiveBox({setInputPlan}) {
  const [placeInput, setPlaceInput] = useState('');
  const StartDate = useSelector(state=>state.Schedule.startDate);
  const EndDate = useSelector(state=>state.Schedule.endDate);
  const [isActive, setIsActive] = useState({
    location: false,
    sdate: false,
    edate: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    let data =  {
      place: '',
      startDate: '',
      endDate: ''}
    dispatch(initSchedule(data));
  },[dispatch])



  const toggleLocation = () => {
    setIsActive({ location: !isActive.location, sdate: false, edate:false });
  };

  const toggleSdates = () => {
    setIsActive({ location: false, sdate: !isActive.sdate, edate: false });
  };

  const toggleEdates = () => {
    setIsActive({ location: false, sdate: false, edate: !isActive.edate });
  };


  const handleSubmit = async () => {

      // 여행지, 시작날짜, 종료날짜가 모두 입력되었는지 확인
      if (!placeInput || !StartDate || !EndDate) {
        alert('모든 필드를 입력해주세요.');
        return;
      }
  
      if (dayjs(EndDate).isBefore(dayjs(StartDate), 'day')) {
        alert('종료날짜는 시작날짜보다 같거나 그 이후여야 합니다.');
        return;
      }

      let isLogin = CheckLogin();
      if(isLogin){

        try{
          //trip 생성 api 요청 코드
          const res = await axios.post("/trips", {
            startDate: dayjs(StartDate).format('YYYYMMDD'),
            finishDate: dayjs(EndDate).format('YYYYMMDD'),
            destination: placeInput
          },{
            headers: {
              'Authorization': `Bearer ${getCookie('jwtToken')}`
            }
          })
          
          console.log("Trip 생성 응답", res.data);
          console.log(res.data.tripId);

          //해당 TripId를 가진 여행 계획 페이지로 이동 
          navigate(`/plan/${res.data.tripId}`);

        }catch(error){
          console.log('Trip Error', error);
          const statusCode = error.response.status;
          const statusText = error.response.statusText;
          const message = error.response.data.message;
          console.log(`${statusCode} - ${statusText} : ${message}`);

        }
      }else{
        alert('로그인 후 이용해주세요.');
        navigate('/login');
      }
      


   
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
    {isActive.location && <PlaceList placeInput={placeInput} setPlaceInput={setPlaceInput} toggleLocation={toggleLocation} layout='main'/>}
    {isActive.sdate && <DateModal type='start' toggledates={toggleSdates} layout='main'/>}
    {isActive.edate && <DateModal type='end' toggledates={toggleEdates} layout='main'/>}




     
   
   
    
     
      </>
    )
  }

export default PlanActiveBox;

