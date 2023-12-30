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
        return res;
    }catch(error){
        console.log('Trip 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}