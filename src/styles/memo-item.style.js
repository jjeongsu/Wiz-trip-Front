import styled from 'styled-components';

export const ItemLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 481px;
    margin-top: 13px;

    ${({ $category }) => {
        switch ($category) {
            case 'ACCOM':
                return `
                    border-left: 2px solid #01C99B;
                `
            case 'FOOD':
                return `
                    border-left: 2px solid #FF73CB;
                `
            case 'TOUR':
                return `
                    border-left: 2px solid #53ABF7;
                `
            case 'ETC':
                return `
                    border-left: 2px solid #D88435;
                `
            case 'MEMO':
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

export const ContentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-left: 15px;

    .title-text{
        color: ${({ theme }) => theme.gray600}
        font-size: 12px;
        font-style: normal;
        font-weight: 600;

    }
    .content-text{
        color: #878EA1;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        margin-top: 5px;

    }
    .url-text{
        color: #5293FF;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        margin-top: 5px;
    }
`