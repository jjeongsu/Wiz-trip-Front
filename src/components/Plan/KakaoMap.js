import styled from 'styled-components';
import logo from '../../assets/logo-marker.png';
import { useEffect } from 'react';
function KakaoMap({ address }) {
  useEffect(() => {
    const { kakao } = window;
    var container = document.getElementById('maps'); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 주소-좌표 변환 객체
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색
    if (address !== '') {
      geocoder.addressSearch(address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          //정상적으로 검색 완료
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          //마커에 대한 정보
          const markerImgSrc = logo;
          const markerImgSize = new kakao.maps.Size(80, 80);
          const markerImgOption = { offset: new kakao.maps.Point(27, 60) };
          const markerImage = new kakao.maps.MarkerImage(
            markerImgSrc,
            markerImgSize,
            // markerImgOption,
          );

          // 결과값으로 받은 위치를 마커로 표시
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage,
          });

          // 지도의 중심을 결과값으로 받은 위치로 이동
          map.setCenter(coords);
        }
      });
    }
  }, []);

  return <MapWrapper id="maps"></MapWrapper>;
}
export default KakaoMap;
const MapWrapper = styled.div``;
