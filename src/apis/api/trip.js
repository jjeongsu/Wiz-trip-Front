//trip 관련 api
import api from "../../axiosConfig";

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

export async function getTrip(tripId){

    try{
        const res = await api.get(`/trips?tripId=${tripId}`);
        return res.data;
    }catch(error){
        console.log('Trip 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

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