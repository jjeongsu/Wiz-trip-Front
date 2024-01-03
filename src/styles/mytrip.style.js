import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;

`

export const MenuButton = styled.button`
    color: ${(props) => (props.$active? '#6446FF' : '#454C53')};
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-left: 10px;

`

export const TripItem = styled.div`
    width: 461px;
    height: 108px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.background};
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .default-text{
        color: ${({ theme }) => theme.gray400Cool};
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
    }

    .item-layout{
        display: flex;
        flex-direction: column;

        .place-text{
            color: ${({ theme }) => theme.gray600};
            font-family: Pretendard Variable;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            margin: 2px;
        }

        .period-text{
            color: ${({ theme }) => theme.gray400Cool};
            font-family: Pretendard Variable;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%; /* 25.2px */
            margin: 2px;
        }

        button{
            width: 109px;
            height: 32px;
            border-radius: 10px;
            background: ${({ theme }) => theme.background};
            color: ${({ theme }) => theme.gray900};
            font-family: Pretendard Variable;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin: 2px;        
        }

      
`