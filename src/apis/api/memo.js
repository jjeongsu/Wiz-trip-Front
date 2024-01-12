import api from "../../axiosConfig";

export async function getMemoData(tripId, category){

    try{
        const res = await api.get(`/trips/${tripId}/memos?tripId=${tripId}&category=${category}`);
        return res.data;
    }catch(error){
        console.log('Trip 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}
export async function addMemoData(tripId, data){

    try{
        const res = await api.post(`/trips/${tripId}/memos?tripId=${tripId}`, data)
        return res;
    }catch(error){
        console.log('Trip Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}

export async function deleteMemoData(tripId, memoId){
    try{
        const res = await api.delete(`/trips/${tripId}/memos?tripId=${tripId}&memoId=${memoId}`)
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