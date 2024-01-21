import Layout from '../components/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultImg from '../assets/default_img.png';
import BlueBtnImg from '../assets/logo-button-blue-min.png';
import PinkBtnImg from '../assets/pink-button-min.png';
import * as W from '../../src/styles/write.style';
import { useQuery } from 'react-query';
import { getTrip } from '../apis/api/trip';
import { useState, useEffect } from 'react';
import { addReviewImage, addReviewText } from '../apis/api/review';
function Write() {
  const { tripId } = useParams();
  const [text, setText] = useState('');
  const [imgSrcArr, setImageSrcArr] = useState([]);
  const [file, setFiles] = useState([]);
  const navigate = useNavigate();
  const { data: tripData, isSuccess: isTripSuccess } = useQuery(['trips'], () =>
    getTrip(tripId),
  );
  const onUploadImage = (e) => {
    if (!e.target.files) {
      return;
    }
    const files = e.target.files;
    console.log('바로 잡아온 FIle', files);
    setFiles(files); //...files
    const reader = new FileReader();
    const thumbnailList = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        thumbnailList.push(e.target.result);
        setImageSrcArr([...thumbnailList]);
      };
      reader.readAsDataURL(file);
    }
  };
  function checkFormData(formData) {
    for (let pair of formData.entries()) {
      console.log(pair[0], '그리고', pair[1]);
    }
  }
  const onSubmit = async (e) => {
    console.log('현재file', file);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append('multipartFileList', file[i]);
    }
    //formData.append('multipartFileList', file);
    checkFormData(formData);

    const textResponse = await addReviewText(tripId, {
      content: text,
    });
    const reviewId = textResponse.reviewId;
    // if (file) {
    //   const imageResponse = await addReviewImage(tripId, reviewId, formData);
    //   console.log('이미지 전달, ', imageResponse);
    // }

    if (reviewId) {
      navigate('/mypage');
    }
  };

  if (isTripSuccess) {
    return (
      <Layout fullWidth={true}>
        <W.Background>
          <W.WriteWrapper>
            <W.Summary>
              <h1>
                멋진 여행을 하셨군요!
                <br />
                <strong>여행기록</strong>을 남겨 추억을 더 오래 기억해 보세요.
              </h1>
              <span>
                from <strong> 2024-01-10 </strong> to{' '}
                <strong> 2024-01-12</strong>
              </span>
              <span>
                at <strong> {tripData.destination}</strong>
              </span>
            </W.Summary>
            <W.PhotoRecordWrapper>
              <h2>여행 사진 남기기</h2>
              <form encType="multipart/form-data">
                <label htmlFor="image-uploader" className="upload-btn">
                  사진 업로드
                </label>
                <input
                  multiple
                  type="file"
                  className="image-uploader"
                  id="image-uploader"
                  accept="image/png, image/jpeg"
                  onChange={onUploadImage}
                />
              </form>
              <div className="thumbnails">
                {imgSrcArr &&
                  imgSrcArr.map((img, index) => (
                    <img
                      src={img}
                      alt="small-thumbnails"
                      className="small-thumbnail"
                      key={index}
                    />
                  ))}
              </div>
            </W.PhotoRecordWrapper>
            <W.TextRecordWrapper>
              <h2>여행 소감 작성하기</h2>

              <p>
                이런 것들을 떠올려 보는건 어때요?{tripData.destination}에서
                먹었던 가장 맛있는 음식은 무엇인가요?
              </p>

              <textarea
                className="text-container"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </W.TextRecordWrapper>
            <W.SubmitRecord>
              <button className="submit-btn" onClick={onSubmit}>
                {' '}
                작성 완료
              </button>
            </W.SubmitRecord>
            <div>
              <img
                src={PinkBtnImg}
                alt="pink-logo-button"
                className="logo-btn pink"
              />
            </div>
            <div>
              <img
                src={BlueBtnImg}
                alt="blue-logo-button"
                className="logo-btn blue"
              />
            </div>
          </W.WriteWrapper>
        </W.Background>
      </Layout>
    );
  }
}
export default Write;
