import styled from 'styled-components'

export const MemoLayout = styled.div`
    // width: 520px;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin-right: 26px;
    margin-bottom: 40px;

`

export const CategoryLayout = styled.div`
    display: flex;
    flex-direction: row;

`
export const CategoryButton = styled.button`
    width: 20%;
    height: 31px;
    border-radius: 12px 12px 0px 0px;
    border-right: 1px solid #E8EBED;
    border-left: 1px solid #E8EBED;
    border-bottom: 0px;
    border-top: 1px solid #E8EBED;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    line-height: 31px;
    
    ${({ $category }) => {
        switch ($category) {
            case 'accom':
                return `
                    background: #E2F6EF;
                    color: #01C99B;
                `
            case 'food':
                return `
                    background: #FFEDF9;
                    color: #FF73CB;
                `
            case 'tour':
                return `
                    background: #EEF8FF;
                    color: #53ABF7;
                `
            case 'etc':
                return `
                    background: #FEFBF7;
                    color: #D88435;
                `
            case 'memo':
                return `
                    background: #FFEFED;
                    color: #D35344;
                `
            default:
                return `
                    background: #E2F6EF;
                    color: #01C99B;
                `
        }
    }}
`

export const MemoContainer = styled.div`
    width: 100%;
    height: 264px;
    border-right: 1px solid #E8EBED;
    border-bottom: 1px solid #E8EBED;
    border-left: 1px solid #E8EBED;
    padding: 0px 17px 0px 22px;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 4px;
      }
    ${({ $category }) => {
        switch ($category) {
            case 'accom':
                return `
                    background: #E2F6EF;
                `
            case 'food':
                return `
                    background: #FFEDF9;
                `
            case 'tour':
                return `
                    background: #EEF8FF;
                `
            case 'etc':
                return `
                    background: #FEFBF7;
                `
            case 'memo':
                return `
                    background: #FFEFED;
                `
            default:
                return `
                    background: #E2F6EF;
                `
        }
    }}

`