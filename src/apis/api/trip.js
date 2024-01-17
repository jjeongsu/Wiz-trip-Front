//trip 관련 api
import api from "../../axiosConfig";
import axios from "axios";
export async function addTrip(data){

    try{
        const res = await api.post("/trips", data)
        return res;
    }catch(error){
        console.log('Trip Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}

export async function updateTrip(data){

    try{
        const res = await api.patch('/trips', data);
        return res;
    }catch(error){
        console.log('Trip Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}

export async function finishTrip(tripId){

    try{
        const res = await api.patch(`/trips/${tripId}?tripId=${tripId}`);
        return res;
    }catch(error){
        console.log('Trip finish Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}

export async function getTrip(tripId, userId){

    try{
        const res = await api.get(`/trips?tripId=${tripId}`);
        return res.data;
    }catch(error){
        console.log('Trip 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

        if(statusCode===403){
            alert("접근 권한이 없는 사용자 입니다.")
        }

    }

}

export async function getMyTrip(pageNum){ //내 여행계획 2개씩 조회 

    try{
        const res = await api.get(`/trips/with-details/page`)
        console.log(res.data);
        return res.data.content;
    }
    catch(error){
        console.log('내 Trip 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }
}

export async function deleteTrip(tripId){
    try{
        const res = await api.delete(`/trips?tripId=${tripId}`)
        return res;
    }
    catch(error){
        console.log('내 Trip 삭제 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }


}

//trip 공유 url 생성
export async function createUrl(tripId){
    try{
        const res = await api.post(`/trips/share?tripId=${tripId}`)
        return res.data;
    }
    catch(error){
        console.log('url 생성 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

        if(statusCode==409){
            alert("이미 종료된 전체 여행 계획입니다.")
        }

    }


}

//trip 공유 url에서 tripId 조회
export async function getTripId(id){
    try{
        const res = await axios.get(`/trips/share?url=${id}`);
        return res;
    }
    catch(error){
        console.log('url 생성 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }


}