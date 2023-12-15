import styled from 'styled-components';

export const BoardBox = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  .board-header {
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.timeline {
    width: 94px;
  }
  .time-entity {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.gray100};
    border-bottom: none;
    border-left: none;
  }

  .schedule {
    display: flex;
    flex-direction: row;
  }
  .oneday-schedule {
    display: flex;
    flex-direction: row;
    width: 235px;
  }
  .contents {
    width: 211px;
  }
  .minute-entity {
    height: 12px;
    border: 1px solid ${({ theme }) => theme.gray100};
    border-bottom: none;
    border-left: none;
  }
  .gap {
    width: 24px;
    .gap-entity {
      height: 48px;
      border: 1px solid ${({ theme }) => theme.gray100};
      border-bottom: none;
      border-left: none;
    }
  }
`;
