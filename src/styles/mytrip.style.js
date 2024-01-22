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
    margin: 5px 10px 5px 0;

`
export const TripItemBox = styled.div`
    width: 760px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
export const TripItem = styled.div`
    width: 233px;
    height: 148px;
    border-radius: 15px;
    background: #FFF;
    margin: 8px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    .default-text{
        color: ${({ theme }) => theme.gray400Cool};
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
    }

    .d-day{
        width: 52px;
        height: 23px;
        border-radius: 10px;
        background: ${({ theme }) => theme.mainAccentColor};
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        text-align: center;
        line-height: 23px;
    }

    .place-text{
        color: ${({ theme }) => theme.gray600};
        font-family: Pretendard Variable;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        margin-top: 5px;
    }

    .period-text{
        color: ${({ theme }) => theme.gray400Cool};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        margin-top: 4px;
    }
      
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const StyleButton = styled.button`
    width: 100px;
    height: 23px;
    border-radius: 5px;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    margin-top: 20px;
    margin-right: 10px;

    ${({ $category }) => {
        switch ($category) {
            case 'revise':
                return `
                    background: #53ABF7;
                `
            case 'delete':
                return `
                    background: #FF6450;
                `
            case 'review':
                return `
                    background: #01C99B;
            `
            default:
                return `
                    background: #53ABF7;
                `
            
        }
    }}

`