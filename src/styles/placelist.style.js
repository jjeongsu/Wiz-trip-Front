import styled from 'styled-components'

export const PlaceModalLayout = styled.div`
    position: absolute;
    width: 380px;
    height: 400px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.paleAccentColor};
    background: #FFF;
    z-index: 999;
    overflow: auto;
    margin-left: 200px;
    &::-webkit-scrollbar {
        width: 4px;
      }
`

export const UpdateLayout = styled(PlaceModalLayout)`
    top: 170px;
    height: 300px;
    border: 1px solid #C9CDD2;
    margin-left: 30px;
`
export const PlaceListBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px;
    align-items: center;

    .placelabel{
        list-style: none;
        color:  ${({ theme }) => theme.gray600};
        /* text-lg */
        font-family: Pretendard Variable;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        margin-left: 10px;
        cursor: pointer;
    }
  
`

export const UpdateListBox = styled(PlaceListBox)`
    .placelabel{
        font-family: Wanted Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
    }
`