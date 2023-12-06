import styled from 'styled-components'

export const PlaceModalLayout = styled.div`
    position: absolute;
    width: 380px;
    height: 400px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.paleAccentColor};
    margin-top: 6px;
    background: #FFF;
    z-index: 999;
    overflow: auto;
    margin-left: 200px;
    margin-top: -15px;

    &::-webkit-scrollbar {
        width: 4px;
      }
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

// export const ScrollDiv = styled.div`
//   overflow-y: auto;
//   &::-webkit-scrollbar {
//     width: 4px;
//   }
//   &::-webkit-scrollbar-thumb {
//     border-radius: 2px;
//     background: #ccc;
//   }
// `;