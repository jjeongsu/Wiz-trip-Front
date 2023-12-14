import { styled } from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  /* width: 77.5%; */
  height: 60px;
  margin: auto;
  margin-top: 29px;
  .logo {
    font-size: 48px;
    color: ${({ theme }) => theme.mainAccentColor};
  }

  button {
    width: 100px;
    height: 55px;
    background-color: ${({ theme }) => theme.mainAccentColor};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.gray50};
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #5a40de;
    }
  }
`;
