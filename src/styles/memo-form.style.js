import styled from 'styled-components';

export const FormLayout = styled.form`
    display: flex;
    flex-direction: row;
    width: 481px;
    margin-top: 13px;
    margin-bottom: 10px;

    ${({ $category }) => {
        switch ($category) {
            case 'accom':
                return `
                    border-left: 2px solid #01C99B;
                `
            case 'food':
                return `
                    border-left: 2px solid #FF73CB;
                `
            case 'tour':
                return `
                    border-left: 2px solid #53ABF7;
                `
            case 'etc':
                return `
                    border-left: 2px solid #D88435;
                `
            case 'memo':
                return `
                    border-left: 2px solid #D35344;
                `
            default:
                return `
                    border-left: 2px solid #01C99B;
                `
        }
    }}
`

export const FormContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 18px;
    align-items: center;

    .input-label{
        color: ${({ theme }) => theme.gray600};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        margin-left: 12px;
    }
    .input-text{
        width: 80%;
        color: #878EA1;
        border: none; //테두리 없애기
        border-bottom: 0.3px solid #878EA1;
        background-color: transparent; //input창 배경 투명하게
        margin-left: 25px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
    }

    .input-text:focus{
        outline: none;
        background-color: transparent;
    }
`