import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  background: ${({ theme }) => theme.background};
  margin-top: 20px;

  .left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    width: 80%;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 20%;
  }
`;

export const PlanInfoLayout = styled.div`
  width: 500px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid #c9cdd2;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  cursor: pointer;
  .text-container {
    color: ${({ theme }) => theme.gray600};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin: auto;
  }

  .vertical-line {
    border-left: 1px solid #c9cdd2;
    height: 28px;
  }
`;

export const InviteBtn = styled.button`
  width: 105px;
  height: 41px;
  border-radius: 25.5px;
  border: 1px solid ${({ theme }) => theme.mainAccentColor};
  font-family: Wanted Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.gray600};
  background: transparent;
  margin-right: 15px;
`;

export const CompleteBtn = styled.button`
  width: 105px;
  height: 41px;
  border-radius: 25.5px;
  border: 0px;
  background: ${({ theme }) => theme.mainAccentColor};
  color: #fff;
  font-family: Wanted Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-right: 20px;
`;
