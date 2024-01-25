import axios from 'axios'
const PROXY = window.location.hostname === 'localhost' ? '' : 'proxy'

export async function getLandmarks() {
  try {
    const response = await axios.get('/landmarks')

    return response.data
  } catch (error) {
    console.log('모든 랜드마크 조회 Error', error)
    const statusCode = error.response.status
    const statusText = error.response.statusText
    const message = error.response.data.message
    console.log(`${statusCode} - ${statusText} : ${message}`)
    return error
  }
}

export async function getLandmarkPage(pageParam) {
  try {
    console.log('pageparma', pageParam)
    console.log('PRoxy', PROXY)
    const response = await axios.get(
      `${PROXY}/landmarks/landmarks/paging?numOfRows=24&pageNo=${pageParam}`
    )
    return response.data
  } catch (error) {
    console.log('랜드마크 페이징 조회 Error', error)
    const statusCode = error.response.status
    const statusText = error.response.statusText
    const message = error.response.data.message
    console.log(`${statusCode} - ${statusText} : ${message}`)
  }
}

//랜드 마크 상세 조회
export async function getLandmarkDetail(contentId) {
  try {
    const response = await axios.get(
      `${PROXY}/landmarks/landmarks?contentId=${contentId}`
    )
    return response.data
  } catch (error) {
    console.log('랜드마크 상세정보 조회 Error', error)
    const statusCode = error.response.status
    const statusText = error.response.statusText
    const message = error.response.data.message
    console.log(`${statusCode} - ${statusText} : ${message}`)
    return error
  }
}

//도시코드로 랜드마크 조회하기
export async function getCityLandmark(cityCode) {
  try {
    const response = await axios.get(`
    ${PROXY}/landmarks/landmarksAreaCode?areaCode=${cityCode}`)
    return response.data
  } catch (error) {
    console.log('도시별 조회 Error', error)
    const statusCode = error.response.status
    const statusText = error.response.statusText
    const message = error.response.data.message
    console.log(`${statusCode} - ${statusText} : ${message}`)
    return error
  }
}
