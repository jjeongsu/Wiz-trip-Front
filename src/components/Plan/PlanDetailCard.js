import styled from 'styled-components';
import { category_palette, categoryToKo } from '../../assets/category-palette';
import { useMutation, useQuery } from 'react-query';
import { getUserProfile } from '../../apis/api/plan-userinfo';
import ModifyDetailIcon from '../../assets/plan-modi-detail-icon';
import DefaultProfileIcon from '../../assets/default-profile-icon';
import { useState, useRef, useEffect } from 'react';
import { checkLockStatus, deletePlan } from '../../apis/api/plan';
import { getUser } from '../../apis/api/user';
import { useQueryClient } from 'react-query';
function PlanDetailCard({
  address,
  content,
  category,
  userId,
  setCurrentSpot,
  setIsOpenFormModal,
  planId,
  tripId,
  setIsDraggable,
}) {
  const Color = category_palette[category];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const {
    data: userProfileData,
    isLoading,
    isSuccess,
  } = useQuery(['user', userId], () => getUser(userId), {
    select: (data) => data.image, // 원하는 필드 선택
  });
  const userProfile = '';
  const queryClient = useQueryClient();
  const handleDelete = (e) => {
    e.preventDefault();
    deletePlanMutation.mutate();
    setIsModalOpen(false);
  };
  const deletePlanMutation = useMutation({
    mutationFn: () => deletePlan(tripId, planId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllPlan'] });
    },
  });

  const checkCardLockStatus = async () => {
    //마우스가 카드위로 올라가는 순간 수정가능하지 여부 check
    const response = await checkLockStatus(tripId, planId);
    console.log('카드 Lock 여부 확인', response);
    if (response === true) {
      //현재는 Lock인 상태
      // const c_mylayout = [...mylayout];
      // const new_layout = c_mylayout.map((l, i) => {
      //   if (~~l.i == planId) {
      //     l.static = true;
      //   }
      //   return l;
      // });
      // setMyLayout(new_layout);
      setIsDraggable(false);
    }
  };
  useEffect(() => {
    const parentHeight = cardRef.current.clientHeight;
    const childHeight = parentHeight - 40;
    contentRef.current.style.maxHeight = `${childHeight}px`;

    if (userProfileData !== null) {
      //유저 프로필 데이터 복호화 코드 추가
    }
  }, []);

  return (
    <DetailCard
      background={Color.background}
      stroke={Color.stroke}
      tag={Color.tag}
      ref={cardRef}
      onMouseDown={(e) => setCurrentSpot(address)}
      onMouseOver={checkCardLockStatus}
    >
      <div className="horizental ">
        <div className="category-tag">{categoryToKo[category]}</div>
        <div className="user-profile">
          {userProfile !== '' ? userProfile : <DefaultProfileIcon />}
        </div>
      </div>
      <div className="horizental content-button">
        <div className="content" ref={contentRef}>
          {content}
        </div>
        <button
          className="modi-button"
          onClick={() => {
            setIsModalOpen((prev) => !prev);
            console.log('onclick 이벤트 발생');
          }}
        >
          <ModifyDetailIcon width="19" height="19" />
        </button>
      </div>
      <ModiModal isOpen={isModalOpen}>
        <button
          onClick={() => {
            console.log('수정하기cliked');
            setIsOpenFormModal(planId);
          }}
        >
          수정하기
        </button>
        <button className="delete" onClick={handleDelete}>
          삭제하기
        </button>
      </ModiModal>
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
    width: 160px;
    overflow: hidden;
    display: block;
    white-space: wrap;
    text-overflow: ellipsis;

    &:hover {
      overflow: visible;
    }
  }
  .modi-button {
    width: 19px;
    height: 19px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    z-index: 4;
  }
`;

const ModiModal = styled.div`
  width: 71px;
  height: 47px;
  position: absolute;
  display: ${(props) => (props.isOpen === true ? 'flex' : 'none')};
  flex-direction: column;
  right: 0;
  bottom: -40px;
  button {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.gray100};
    font-size: 12px;
    color: ${({ theme }) => theme.gray200};
    margin: 0;
    width: inherit;
    height: 23px;
    cursor: pointer;
  }

  .delete {
    color: ${({ theme }) => theme.red600};
    border-top: none;
  }
`;
