import styled from 'styled-components'

export const DateModalLayout = styled.div`
    position: absolute;
    width: 736px;
    height: 400px;
    border-radius: 20px;
    border: 2px solid #BFC6FA;
    background: #FFF;
    z-index: 999;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    margin-top: -15px;

`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 25px;
    align-items: center;

    .first-month{
        display: flex;
        justify-content: center;
        width: 300px;
        color: ${({ theme }) => theme.gray600};
        font-family: Pretendard Variable;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
    }
    .second-month{
        display: flex;
        justify-content: center;
        width: 300px;
        margin-left: 50px;
        color: ${({ theme }) => theme.gray600};
        font-family: Pretendard Variable;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
    }
`

export const DayWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    grid-template-columns: repeat(7, 1fr);
    width: 300px;
    list-style:none;


    li{
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.gray600};
        text-align: center;
        /* text-lg */
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
        margin: 13px 10px;
    }

       
`

export const CalendarBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 300px;
`
export const DateContainer = styled.div`
    width: 30px;
    height: 30px;
    cursor:pointer;
    margin: 6.5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .not-selected{  
        color: ${({ theme }) => theme.gray600};
        text-align: center;
        /* text-lg */
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 25.2px */
    }

    .selected{  
        width: 30px;
        height: 30px;
        color: #FFF;
        text-align: center;
        /* text-lg */
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 175%; /* 25.2px */
        border-radius: 10px;
        background: #BFC6FA;
    }
`