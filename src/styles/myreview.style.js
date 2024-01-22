import styled from 'styled-components';

export const ReviewItemBox = styled.div`
  width: 760px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ReviewItem = styled.div`
  width: 235px;
  height: 245px;
  border-radius: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 8px;
  align-items: center;
  position: relative;
  a {
    cursor: pointer;
  }
  .image {
    width: 193px;
    height: 156px;
    border-radius: 5px;
    margin-top: 15px;
    padding: 20px 10px;
    object-fit: contain;
  }

  .place-text {
    width: 193px;
    color: var(--gray600, var(--gray600, #454c53));
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin-top: 5px;
  }
  .period-text {
    width: 193px;
    color: var(--gray400_cool, #878ea2);
    font-family: Wanted Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    margin-top: 5px;
  }
  .default-text {
    color: ${({ theme }) => theme.gray400Cool};
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin: auto;
  }

  .delete-button {
    color: ${({ theme }) => theme.red200};
    font-family: Pretendard Variable;
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.red200};
    width: 40px;
    height: 20px;
    border-radius: 10px;
    position: absolute;
    bottom: 50px;
    right: 20px;
  }
`;
