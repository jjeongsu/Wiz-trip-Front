import { styled } from 'styled-components';

export const TourCityBox = styled.div`
  .slide-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .slide-item-wrapper {
    position: relative;
    width: 1056px;
    display: flex;
    align-items: center;
    padding: 0;
    overflow: hidden;
  }
  .slide-item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 115px;
    height: 40px;
    list-style: none;
    padding: 5px 10px;
    transform: ${(props) => `translateX(${props.slide}px)`};
    transition: 0.8s ease;

    button {
      border: none;
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.gray400Cool};
      font-size: 24px;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.mainAccentColor};
        font-weight: 600;
      }
    }
  }

  .slide-button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const TourCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
