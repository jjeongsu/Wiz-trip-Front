import styled from "styled-components";
export const MyLayoutBox = styled.div`
  display: flex;
  width: 1100px;
  flex-direction: row;
  margin: auto;

  .column-layout{
    display: flex;
    flex-direction: column;
    margin-left: 90px;

  }
`;

export const TitleText = styled.h1`
  color: ${({ theme }) => theme.gray900};
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin-top: 30px;
`

export const Line = styled.hr`
  width: 750px;
  height: 1px;
  margin-left: 0;
  background: ${({ theme }) => theme.gray400Warm};
`