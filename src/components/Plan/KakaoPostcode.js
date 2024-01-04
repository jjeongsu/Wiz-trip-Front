import styled from 'styled-components';
import { DaumPostcode, useDaumPostcodePopup } from 'react-daum-postcode';
function KakaoPostcode({ setAddress }) {
  const open = useDaumPostcodePopup(); //클릭시 수행 될 팝업생성함수
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; //추가될 주소
    let localAddress = data.sido + ' ' + data.sigungu; //지역주소(시, 도 + 시, 군, 구)
    if (data.addressType === 'R') {
      //주소타입이 도로명주소일 경우
      if (data.bname !== '') {
        extraAddress += data.bname; //법정동, 법정리
      }
      if (data.buildingName !== '') {
        //건물명
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      //지역주소 제외 전체주소 치환
      fullAddress = fullAddress.replace(localAddress, '');
      //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
    }
    const finalAdress = `${localAddress} ${fullAddress} `;
    console.log('extraADdress', extraAddress);
    setAddress(finalAdress);
  };
  const handleClick = (e) => {
    e.preventDefault();
    open({ onComplete: handleComplete });
  };
  return <Button onClick={handleClick}>주소찾기</Button>;
}

export default KakaoPostcode;

const Button = styled.button`
  display: block;
  width: inherit;
  height: 30px;

  color: ${({ theme }) => theme.mainAccentColor};
  border-radius: 15px;
  border: 1px solid;
  margin-top: 10px;
  font-weight: 700;
`;
