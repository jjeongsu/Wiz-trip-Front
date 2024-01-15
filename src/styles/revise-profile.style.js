import styled from "styled-components";

export const FormLayout = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    width: 364px;
    height: 520px;
    background: #FFF;
    stroke-width: 1px;
    stroke: #E8EBED;
    border-radius: 20px;
    align-items: center;

    display: flex;
    flex-direction: column;

    .close-modal-button{
        margin: 28px 32px 0px 313px;
    }
    .profile-image-icon{
        margin-top: 25px;
    }

`

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-label{
        width: 95%;
        color: var(--gray600, #454C53);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        margin: 15px 0px 5px 0px;
    
    }
    .form-component{
        display: flex;
        flex-direction: row;
        .input-box{
            width: 211px;
            height: 29px;
            border-radius: 5px;
            background: #EDF3FB;
            margin: 5px;
            border: none; //테두리 없애기
            font-family: Pretendard Variable;
            padding: 5px;
        }
    }
    .error-message{
        display: block;
        color: ${({ theme }) => theme.red600};
        font-size: 13px;
        grid-column: 1 / span 2;
        height: 10px;
    }

`

export const StyledButton= styled.button`
    border-radius: 20px;
    background: var(--mainAccentColor, #6446FF);
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    font-family: Pretendard Variable;

`

export const RevImgBtn = styled(StyledButton)`
    margin-top: 9px;
    width: 135px;
    height: 26px;
    line-height: 26px;
    margin-bottom: 10px;
`

export const FormBtn = styled(StyledButton)`
    width: 75px;
    height: 30px;
    margin: 5px;
`

export const SubmitBtn = styled(StyledButton)`
    width: 217px;
    height: 30px;
    margin-top: 20px;
`