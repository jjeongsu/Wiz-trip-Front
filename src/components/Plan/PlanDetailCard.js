import styled from 'styled-components';
import { category_palette, categoryToKo } from '../../assets/category-palette';
import { useQuery } from 'react-query';
import { getUserProfile } from '../../apis/api/plan-userinfo';
import ModifyDetailIcon from '../../assets/plan-modi-detail-icon';
import DefaultProfileIcon from '../../assets/default-profile-icon';
function PlanDetailCard({ address, content, category, userId }) {
  const Color = category_palette[category];

  //const { isLoading, fetchedUserProfile } = useQuery(
  //  'userProfileInfo',
  //  getUserProfile(userId),
  //); //프로필 이미지 정보 만 가져옴

  const userProfile = ''; //유저프로필 복호화
  return (
    <DetailCard
      background={Color.background}
      stroke={Color.stroke}
      tag={Color.tag}
    >
      <div className="horizental ">
        <div className="category-tag">{categoryToKo[category]}</div>
        <div className="user-profile">
          {userProfile !== '' ? userProfile : <DefaultProfileIcon />}
        </div>
      </div>
      <div className="horizental content-button">
        <div className="content">{content}</div>
        <button className="modi-button">
          <ModifyDetailIcon width="19" height="19" />
        </button>
      </div>
    </DetailCard>
  );
}

export default PlanDetailCard;

const DetailCard = styled.div`
  position: relative;
  background-color: ${(props) => props.background};
  border: none;
  border-left: 3px solid ${(props) => props.stroke};
  z-index: 3;
  width: inherit;
  height: inherit;
  padding: 5px 7px 5px 14px;
  .horizental {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content-button {
    position: absolute;
    bottom: 5px;
    width: 188px;
  }

  .category-tag {
    width: 33px;
    height: 19px;
    border-radius: 10px;
    background-color: ${(props) => props.tag};
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.stroke};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    font-size: 12px;
  }
  .modi-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
