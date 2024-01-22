import styled from 'styled-components'

export const BoxLayout = styled.div`
    position: relative;
    width: 736px;
    height: 70px;
    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.paleAccentColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #F7F8F9;
    margin: 25px auto 10px auto;
    z-index: 999;

`
export const VerticalLine = styled.div`
    border-left: 1px solid #BFC6FA;
    height: 43.046px;
`
export const TextBox = styled.div`
    width: 200px;
    height: 72px;
    border-radius: 40px;
    border: ${props => props.$visible=='true'  ? '2px solid #BFC6FA' : '0px'};
    background-color: ${props => props.$visible=='true'  ? '#FFF' : 'transparent'};
    box-shadow: ${props => props.$visible=='true'   ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : '0px'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    &:hover{
        ${props => props.$visible === 'false' && `
            height: 69px;
            background: rgba(158, 164, 170, 0.40);
            cursor: pointer;
        `}
    }

    .top-label{
        width: 100px;
        color: ${({ theme }) => theme.gray600};
        /* text-lg */
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 2px;
    }
    
    .input{
        width: 150px;
        color: ${({ theme }) => theme.gray400Warm};
        /* text-lg */
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        border: none; //테두리 없애기
        background-color: transparent; //input창 배경 투명하게
        padding: 0;  
    }
    .input:focus{
        outline: none;
        background-color: transparent;
    }


    
`

export const SubmitButton = styled.button`
    width: 180px;
    height: 56px;
    border-radius: 25px;
    border: 0px  ${({ theme }) => theme.mainAccentColor};
    background: ${({ theme }) => theme.mainAccentColor};
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:24px;
    pointer-events: auto;

    /* title-sm */
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;

`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

`