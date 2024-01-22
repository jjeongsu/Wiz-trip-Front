import React, {useState} from 'react'
import * as U from '../../styles/updateplan.style'
import PlaceList from '../PlaceList';
import DateModal from '../DateModal';
import dayjs from 'dayjs';
import {useSelector} from 'react-redux'
import { useParams } from 'react-router';
import { updateTrip } from '../../apis/api/trip';
import { useQueryClient, useMutation } from 'react-query';

function UpdatePlanInfo({setUpdateForm}) {
    const tripId = useParams().tripId;
    const [placeInput, setPlaceInput] = useState(useSelector(state=>state.Schedule.place));
    const StartDate = useSelector(state=>state.Schedule.startDate);
    const EndDate = useSelector(state=>state.Schedule.endDate);
    const [isActive, setIsActive] = useState({
      location: false,
      sdate: false,
      edate: false,
    });


    const queryClient = useQueryClient();
    const updateMutation = useMutation(updateTrip, {
      onSuccess: () => {
        queryClient.invalidateQueries('getTrip');
      },
    });


    // 원래 상태를 추적하는 상태 변수
    const [originalData, setOriginalData] = useState({
      location: placeInput,
      startDate: StartDate,
      endDate: EndDate
    })

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

    const handleSubmit = async () => {
        if (dayjs(EndDate).isBefore(dayjs(StartDate), 'day')) {
            alert('종료날짜는 시작날짜보다 같거나 그 이후여야 합니다.');
            return;
        }

        // 변경된 데이터만 추출
        const updatedData = {};
        if (placeInput !== originalData.location) {
          updatedData.destination = placeInput;
        }
        if (StartDate !== originalData.startDate) {
          updatedData.startDate = dayjs(StartDate).format('YYYYMMDD');
        }
        if (EndDate !== originalData.endDate) {
          updatedData.finishDate = dayjs(EndDate).format('YYYYMMDD');
        }

        // 변경된 데이터가 없으면 경고를 표시하고 함수를 종료
        if (Object.keys(updatedData).length === 0) {
          setUpdateForm(false);
          return;
        }

        //trip 수정 API 요청 코드 
        await updateMutation.mutateAsync({ ...updatedData, tripId: tripId });
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
    {isActive.sdate && <DateModal type='start' toggledates={toggleSdates} layout='update'/>}
    {isActive.edate && <DateModal type='end' toggledates={toggleEdates} layout='update'/>}
    </>
  )
}

export default UpdatePlanInfo