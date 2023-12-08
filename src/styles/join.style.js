import styled from 'styled-components';

export const JoinForm = styled.div`
  margin-top: 40px;
  div.container {
    padding-inline: auto;
    display: grid;
    grid-template-columns: 260px 80px;
    grid-auto-rows: minmax(12px, auto);
    grid-gap: 13px;
  }
  input {
    border: 1px solid #bfc6fa;
    font-family: Pretendard Variable;
    color: ${({ theme }) => theme.gray400Cool};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding-left: 5px;
    height: 40px;
    grid-column: 1 / span 1;
  }
  .button {
    grid-column: 2 / span 1;
  }
  .input-check {
    border: none;
    border-bottom: 1px solid #bfc6fa;
  }
  .error-message {
    display: block;
    color: ${({ theme }) => theme.red600};
    font-size: 13px;
    grid-column: 1 / span 2;
    height: 10px;
  }
`;

export const Button = styled.button`
  width: 79px;
  height: 38px;
  border-radius: 21.5px;
  background-color: ${({ theme }) => theme.mainAccentColor};
  color: white;
  font-family: Pretendard Variable;
  border: none;
  cursor: pointer;
  font-size: 14px;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const SubmitBtn = styled(Button)`
  width: 217px;
  margin-top: 50px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
