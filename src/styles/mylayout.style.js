import styled from "styled-components";
export const MyLayoutBox = styled.div`
  display: grid;
  grid-template-columns: 560px 560px;
  grid-template-rows: 285px 285px;
  grid-column-gap: 95px;
  grid-row-gap: 40px;
  padding-inline: 24px;
  padding-top: 10px;
  div:first-child {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  div:nth-child(2) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
  div:nth-child(3){
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
  }
`;

export const TitleText = styled.h1`

    color: ${({ theme }) => theme.gray900};
    font-family: Pretendard Variable;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    margin-left: 10px;

`