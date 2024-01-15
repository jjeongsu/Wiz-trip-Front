import api from '../../axiosConfig';

//trip에 포함된 모든 plan 조회하기 (plan 내 세부정보 포함)
export const getAllPlans = async (tripId) => {
  try {
    const response = await api.get(`/trips/${tripId}/plans/all`);
    return response.data;
  } catch (error) {
    console.log('Trip 내 모든 plan 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};

//trip 내 하나의 세부계획에 대한 정보 조회
export const getTargetPlan = async (tripId, planId) => {
  try {
    const response = await api.get(`/trips/${tripId}/plans?planId=${planId}`);
    return response.data;
  } catch (error) {
    console.log('Trip 내 1개의 plan 조회 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};

//trip내 plan 생성
export const createPlan = async (tripId, data) => {
  try {
    const response = await api.post(`/trips/${tripId}/plans`, data);
    return response; //planId
  } catch (error) {
    console.log('Plan 생성 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};

//trip내 plan 삭제
export const deletePlan = async (tripId, planId) => {
  try {
    const response = await api.delete(
      `/trips/${tripId}/plans?planId=${planId}`,
    );
    return response;
  } catch (error) {
    console.log('Plan 삭제 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};

//trip내 plan 수정 : 반드시 update된 attribute만 전달
export const updatePlan = async (tripId, data) => {
  try {
    const response = await api.patch(`/trips/${tripId}/plans`, data);
    return response;
  } catch (error) {
    console.log('Plan 수정 Error', error);
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = error.response.data.message;
    console.log(`${statusCode} - ${statusText} : ${message}`);
  }
};
