import styled from 'styled-components';
export const PlannerBox = styled.div`
  /* background-color: powderblue; */
  display: grid;
  grid-template-columns: 94px repeat(3, 210px);
  grid-template-rows: 18px 816px;
  grid-column-gap: 24px;

  .time-container {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(66px, 17);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 48px;
`;
export const DragItem = styled.div`
  border: 1px solid ${({ theme }) => theme.gray100};
  border-bottom: none;
`;
export const Time = styled.div`
  grid-column: 1 / span 1;
  grid-row: ${(props) => props.$row} / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.gray100};
  border-left: none;
  border-bottom: none;
  font-size: 14px;
`;

export const Date = styled.p`
  grid-column: ${(props) => props.$col + 2} / span 1;
  display: block;

  margin: 0;
  text-align: center;

  border: 1px solid ${({ theme }) => theme.gray100};
  border-bottom: none;
`;

export const DayWrapper = styled.div`
  .droppable {
    grid-column: ${(props) => props.$col + 2} / span 1;
    grid-row: 2/-1;
    background-color: aliceblue;
  }
`;

export const Entity = styled.div`
  grid-row: ${(props) => props.$row} / span ${(props) => props.$duration};
`;
