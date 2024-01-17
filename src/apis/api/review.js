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


export async function getToReviewLength(){

    try{
        const res = await api.get('/to-reviews/count');
        return res.data;
    }catch(error){
        console.log('to-Review 개수 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}

export async function getMyReviewLength(){

    try{
        const res = await api.get('/my-reviews/count');
        return res.data;
    }catch(error){
        console.log('my-Review 개수 조회 Error', error);
        const statusCode = error.response.status;
        const statusText = error.response.statusText;
        const message = error.response.data.message;
        console.log(`${statusCode} - ${statusText} : ${message}`);

    }

}