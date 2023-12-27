import styled from 'styled-components';

export const BoardBox = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  position: relative;
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

  .schedule-table {
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
    position: relative;
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
  .grid-drag-board {
    position: absolute;
    top: 18px;
    left: 94px;
    z-index: 2;
  }
  button.add-plan-button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Schedule = styled.div`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: 0px;
  z-index: 3;
  background-color: aliceblue;
  width: 211px;
  height: ${(props) => `${props.height}px`};
`;
