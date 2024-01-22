import styled from 'styled-components';

export const BoardBox = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: visible;
  position: relative;
  .board-header {
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      color: ${({ theme }) => theme.subAccentColor};
      font-weight: 400;
      margin-left: 10px;
    }
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
    width: inherit;
    height: inherit;
    z-index: 2;
    left: -2px;
  }
  button.add-plan-button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const SlideNav = styled.div`
  position: relative;
  .slide-button-prev {
    position: absolute;
    left: 0;
    cursor: pointer;
  }
  .slide-button-next {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;
export const SlideItemWrapper = styled.div`
  position: relative;
  transform: ${(props) => `translateX(${props.slide}px)`};
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
