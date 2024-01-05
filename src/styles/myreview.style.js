import styled from "styled-components";

export const ReviewItemBox = styled.div`
    width: 760px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export const ReviewItem = styled.div`
    width: 235px;
    height: 235px;
    border-radius: 15px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    margin: 8px;
    align-items: center;

    .image{
        width: 193px;
        height: 156px;
        border-radius: 5px;
        margin-top: 15px;
    }

    .place-text{
        width: 193px;
        color: var(--gray600, var(--gray600, #454C53));
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        margin-top: 5px;
    }
    .period-text{
        width: 193px;
        color: var(--gray400_cool, #878EA2);
        font-family: Wanted Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        margin-top: 5px;
    }
`