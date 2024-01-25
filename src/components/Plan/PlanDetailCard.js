import styled from 'styled-components';
import { category_palette, categoryToKo } from '../../assets/category-palette';
import { useMutation, useQuery } from 'react-query';
import { getUserProfile } from '../../apis/api/plan-userinfo';
import ModifyDetailIcon from '../../assets/plan-modi-detail-icon';
import DefaultProfileIcon from '../../assets/default-profile-icon';
import { useState, useRef, useEffect } from 'react';
import { checkLockStatus, deletePlan, lockPlan } from '../../apis/api/plan';
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
  mylayout,
  setMyLayout,
  setIsDraggable,
}) {
  const Color = category_palette[category];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

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
  const onUpdateClick = async () => {
    console.log('수정하기cliked');
    const response = await checkLockStatus(tripId, planId);
    if (response === true) {
      //lock인 상태
      alert('다른 사용자가 해당 스케쥴을 편집중입니다.');
    } else if (response === false) {
      //unlock인상태
      const lockRes = await lockPlan(tripId, planId);
      setIsOpenFormModal(planId);
    }
  };

  useEffect(() => {
    const parentHeight = cardRef.current.clientHeight;
    const childHeight = parentHeight - 40;
    contentRef.current.style.maxHeight = `${childHeight}px`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailCard
      background={Color.background}
      stroke={Color.stroke}
      tag={Color.tag}
      ref={cardRef}
      onMouseDown={(e) => setCurrentSpot(address)}
    >
      <div className="horizental ">
        <div className="category-tag">{categoryToKo[category]}</div>
        <div className="user-profile">
          <DefaultProfileIcon />
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
        <button onClick={onUpdateClick}>수정하기</button>
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
