import styled from 'styled-components';

export const PlanInfoLayout = styled.div`
    width: 500px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #C9CDD2;
    background: #F7F8F9;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;

    .vertical-line{
        border-left: 1px solid #C9CDD2;
        height: 28px;
    }
`

export const TextBox = styled.div`
    height: 48px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  
    .top-label{
        width: 100px;
        color: ${({ theme }) => theme.gray600};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 2px;
    }
    
    .input-container{
        width: 100px;
        color: ${({ theme }) => theme.gray400Warm};
        font-family: Wanted Sans Variable;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        border: none; //테두리 없애기
        background-color: transparent; //input창 배경 투명하게
        padding: 0;
    }
    .input-container:focus{
        outline: none;
        background-color: transparent;
    }

`

export const ReviseBtn = styled.button`
    width: 69px;
    height: 35px;
    border-radius: 20px;
    border: 0px ${({ theme }) => theme.mainAccentColor};
    background: ${({ theme }) => theme.mainAccentColor};
    font-family: Wanted Sans;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-right: 10px;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
`