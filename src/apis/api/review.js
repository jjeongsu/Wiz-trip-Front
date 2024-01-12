import api from "../../axiosConfig";

export async function getReview(){

    try{
        const res = await api.get('/my-reviews');
        return res;
    }catch(error){
        console.log('Review 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}