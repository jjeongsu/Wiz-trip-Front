import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    width: 470px;
    height: 220px;
    border-radius: 20px;
    background: ${({ theme }) => theme.background};

`

export const UserInfoLayout = styled.div`
    display: flex;
    flex-direction: row;

    img{
        margin-top: 45px;
        margin-left: 30px;
        width: 122px;
        height: 122px;
    }

    .user-info-wrapper{
        display: flex;
        flex-direction: column;
        margin-top: 45px;
        margin-left: 40px;

        span{
            color: ${({ theme }) => theme.gray900};
            font-family: Pretendard Variable;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            margin: 6px;
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
    margin-top: 18px;
    margin-left: 342px;

    .revise-text{
        color: ${({ theme }) => theme.mainAccentColor};
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        margin-right: 2px;
    }

`