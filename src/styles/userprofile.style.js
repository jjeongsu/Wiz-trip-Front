import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    width: 261px;
    height: 700px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const UserInfoLayout = styled.div`
    margin-top: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 90px;
        height: 90px;
        margin: 5px;
    }

    .nickname-text{
        color: ${({ theme }) => theme.gray900};
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        margin: 5px;
    }
    
    .email-text{
        color: ${({ theme }) => theme.gray900};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 20px;
    }
`
export const Line = styled.hr`
    width: 220px;
    height: 1px;
    margin: 15px;
    background: #C9CDD2;
`

export const ItemLayout = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: default;


    .info-wrapper{
        display: flex;
        flex-direction: column;
        margin: 5px;

        .title-text{
            color:  ${({ theme }) => theme.gray600};
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin: 1px;
        }
        .count-text{
            color: var(--gray600, var(--gray600, #454C53));
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            margin: 1px;
        }
    }

`


export const ReviseButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    cursor: default;
    margin: 180px 5px 15px 125px;

    .revise-text{
        font-family: Pretendard Variable;
        color: ${({ theme }) => theme.mainAccentColor};
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        margin-right: 2px;
    }

`