import styled from 'styled-components'

export const BoxLayout = styled.div`
    width: 736px;
    height: 70px;
    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.paleAccentColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px auto;
`

export const BasicLabel = styled.label`
    color: ${({ theme }) => theme.gray600};
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin: 0 55px;
    cursor: pointer;
`

export const VerticalLine = styled.div`
    border-left: 1px solid #BFC6FA;
    height: 43.046px;
`
export const SubmitButton = styled.button`
    width: 180px;
    height: 56px;
    border-radius: 25px;
    border: 0px  ${({ theme }) => theme.mainAccentColor};
    background:  ${({ theme }) => theme.mainAccentColor};
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:24px;

    /* title-sm */
    font-family: Pretendard Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;

`





