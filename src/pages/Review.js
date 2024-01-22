import { useQuery } from 'react-query';
import { useParams, useLocation } from 'react-router-dom';
import { getTargetReview } from '../apis/api/review';
import Layout from '../components/Layout';
import * as R from '../styles/review.style';
import { getUser } from '../apis/api/user';
import { getTrip } from '../apis/api/trip';
import { useState, useEffect } from 'react';
import SlideNextIcon from '../assets/slide-next-icon';
import SlidePrevIcon from '../assets/slide-prev-icon';
import GreenLogoBtn from '../assets/logo-button-green-min.png';
function Review() {
  const { tripId } = useParams();
  const { state } = useLocation();
  const reviewId = state.reviewId;
  const [imageUrlArr, setImageUrl] = useState([]);
  const [slidePx, setSlidePx] = useState(0);

  //캐러셀 버튼 조작
  const toPrev = () => {
    if (slidePx < 0) setSlidePx(slidePx + 300);
  };
  const toNext = () => {
    if (slidePx > -((imageUrlArr.length - 1) * 300)) setSlidePx(slidePx - 300);
  };
  //데이터 불러오기
  const { data, isLoading } = useQuery(['targetReview'], () =>
    getTargetReview(tripId, reviewId),
  );
  const { data: userData, isLoading: isUserLoading } = useQuery(
    ['user'],
    () => getUser(data?.userId),
    {
      enabled: !!data?.userId,
    },
  );
  const { data: tripData, isLoading: isTripLoading } = useQuery(['trip'], () =>
    getTrip(tripId),
  );

  //이미지 데이터 디코딩
  useEffect(() => {
    const ImageUrlArr = data?.imageList.map((image, index) => {
      const base64ImageData = image.content;
      const imageUrl = `data:image/webp;base64,${base64ImageData}`;
      return imageUrl;
    });
    setImageUrl(ImageUrlArr);
  }, [data]);
  return (
    <Layout fullWidth={true}>
      <R.Background>
        <R.ReviewWrapper>
          <R.Summary>
            <h1>
              {' '}
              <strong>{userData?.nickname}</strong>님의 지난 여행기록 🖊️
            </h1>
            <span>
              ⭐ Start : <strong>{tripData?.startDate}</strong> <br />
              🌙 Finish : <strong>{tripData?.finishDate}</strong>
            </span>
            <span>
              📌 At <strong> {tripData?.destination}</strong>
            </span>
          </R.Summary>

          <h2> 여행 사진 모아보기</h2>
          <R.PhotoWrapper slide={slidePx}>
            <div className="carousel-main">
              <button onClick={toPrev}>
                <SlidePrevIcon width={20} height={20} fill={'none'} />
              </button>
              <div className="carousel-wrapper">
                {imageUrlArr?.map((url, index) => (
                  <div className="carousel-item" key={index}>
                    <img src={url} alt="review" className="review-image" />
                  </div>
                ))}
              </div>
              <button onClick={toNext}>
                <SlideNextIcon width={20} height={20} fill={'none'} />
              </button>
            </div>
          </R.PhotoWrapper>
          <R.TextWrapper>
            <h2> 여행 소감 </h2>
            <div className="text-content">{data?.content}</div>
          </R.TextWrapper>
          <div>
            <img
              src={GreenLogoBtn}
              alt="logo-button-img"
              className="logo-button-img"
            />
          </div>
        </R.ReviewWrapper>
      </R.Background>
    </Layout>
  );
}
export default Review;
