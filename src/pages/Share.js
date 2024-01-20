import React, { useEffect } from 'react'
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

    useEffect(()=>{
        AuthTrip();
    },[])


    async function AuthTrip(){
        const res = await getTripId(id);
        if(res){
            if (CheckLogin()) {//로그인 되어 있는 경우 
                const tripId = await GoToTrip(res.data.tripId, userId);
                //해당 tripId를 가진 trip으로 이동
                navigate(`/plan/${tripId}`);
            } else {
                //응답을 통해 받은 tripId 쿠키에 저장 
                setCookie('tripId', res.data.tripId, {path: '/'});
                alert('로그인 후 해당 페이지로 이동할 수 있습니다.')

                //로그인 페이지로 이동 
                navigate('/login');
            }
        }else{ 
            navigate('/')
        }
       
    }

    return (
        <div>
        </div>
    )
}

export async function GoToTrip(tripId, userId){

    // const navigate = useNavigate();
    const tripData = await getTrip(tripId);

    //tripData 권한이 없는 유저라면 
    if(tripData===403){
        //userId 추가 요청 코드
        console.log("유저 id 추가 필요 ")
        await addUserToTrip(tripId, userId);
        
    }

    return tripId;

}

export default Share;