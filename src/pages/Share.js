import React, { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { addUserToTrip, getTrip, getTripId, updateTrip } from '../apis/api/trip';
import { setCookie } from '../utils/cookies';
import CheckLogin from '../utils/checklogin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Share() {

    const id = useParams().tripId;
    const userId = useSelector(state=>state.User.userIdx);
    const navigate = useNavigate();

    // AuthTrip 함수를 useCallback으로 정의하고 필요한 의존성을 배열에 넣습니다.
    const AuthTrip = useCallback(async () => {
        const res = await getTripId(id);
        if (res) {
            if (CheckLogin()) {
                console.log('로그인 O');
                const tripId = await GoToTrip(res.data.tripId, userId);
                navigate(`/plan/${tripId}`);
            } else {
                setCookie('tripId', res.data.tripId, { path: '/' });
                alert('로그인 후 해당 페이지로 이동할 수 있습니다.');
                navigate('/login');
            }
        } else {
            navigate('/');
        }
    }, [id, userId, navigate]);

    useEffect(()=>{
        AuthTrip();
    },[AuthTrip])



    return (
        <div>
        </div>
    )
}

export async function GoToTrip(tripId, userId){

    // const navigate = useNavigate();
    const tripData = await getTrip(tripId);

    console.log(tripData);

    //tripData 권한이 없는 유저라면 
    if(tripData===403){
        //userId 추가 요청 코드
        console.log("유저 id 추가 필요 ")
        await addUserToTrip(tripId, userId);
        
    }

    return tripId;

}

export default Share;