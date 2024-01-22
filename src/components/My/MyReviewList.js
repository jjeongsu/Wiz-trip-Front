import React from 'react';
import * as M from '../../styles/mylayout.style';
import * as R from '../../styles/myreview.style';
import NoImage from '../../../src/assets/dummyImg/NoImage.png';
import LoadingSpinner from '../../assets/loading-spinner.gif';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { deleteReview, getReview } from '../../apis/api/review';
import { Link } from 'react-router-dom';
function MyReviewList() {
  const { isLoading, data: myReview } = useQuery(['getMyReview'], () =>
    getReview(),
  );

  //삭제 시
  const queryClient = useQueryClient();
  const uploadPlanMutation = useMutation({
    mutationFn: (param) => deleteReview(param.tripId, param.reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getMyReview'] });
    },
  });

  if (isLoading)
    return (
      <div>
        <img
          src={LoadingSpinner}
          alt="loading-spinner"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
    );

  return (
    <>
      <M.TitleText>나의 여행기록</M.TitleText>
      <M.Line />
      {myReview?.list?.length > 0 ? (
        <R.ReviewItemBox>
          {myReview.list?.map((review, index) => {
            const base64ImageData = review.imageList[0]?.content;
            const imageUrl =
              base64ImageData == undefined
                ? NoImage
                : `data:image/webp;base64,${base64ImageData}`;
            return (
              <R.ReviewItem key={index}>
                <Link
                  to={`/review/${review.tripId}`}
                  state={{ reviewId: review.reviewId }}
                >
                  <img src={imageUrl} className="image" alt="No" />
                </Link>
                <span className="place-text">{review.destination}</span>
                <span className="period-text">{`${review.startDate}~${review.finishDate}`}</span>

                <button
                  className="delete-button"
                  onClick={() => {
                    uploadPlanMutation.mutate({
                      tripId: review.tripId,
                      reviewId: review.reviewId,
                    });
                  }}
                >
                  삭제
                </button>
              </R.ReviewItem>
            );
          })}
        </R.ReviewItemBox>
      ) : (
        <R.ReviewItem>
          <span className="default-text"> 작성된 내 여행기록이 없습니다.</span>
        </R.ReviewItem>
      )}
    </>
  );
}

export default MyReviewList;
