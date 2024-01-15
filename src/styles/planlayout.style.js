import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const PlanLayoutBox = styled.div`
  display: grid;
  grid-template-columns: 1000px 522px; //826
  grid-template-rows: 500px 293px;
  grid-column-gap: 44px;
  grid-row-gap: 20px;
  padding-inline: 24px;
  padding-top: 10px;

  div:first-child {
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
  }
  div:nth-child(3) {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }
`;
