import styled from 'styled-components';
export const Background = styled.div`
  width: 100vw;
  height: 95vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

export const ReviewWrapper = styled.div`
  width: 641px;
  height: 900px;
  background-color: #ffffff;
  border-radius: 37px 37px 0px 0px;
  position: relative;
  padding: 65px 75px 0px 75px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  .logo-button-img {
    position: absolute;
    left: 90px;
    top: -50px;
    width: 89px;
    height: 89px;
    animation: rotate 7s ease-out 0.5s infinite;

    &:hover {
      animation-play-state: paused;
    }
  }
  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    70% {
      -webkit-transform: rotate(270deg);
      -o-transform: rotate(270deg);
      transform: rotate(270deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Summary = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  }
  strong {
    color: ${({ theme }) => theme.mainAccentColor};
  }
  span {
    color: ${({ theme }) => theme.gray400Cool};
    display: block;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 400;
    strong {
      color: ${({ theme }) => theme.gray600};
      font-weight: 500;
    }
  }
`;

export const PhotoWrapper = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  .carousel-main {
    display: flex;
    flex: row;
    justify-content: center;
    align-items: center;
  }
  .carousel-wrapper {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    flex-wrap: nowrap;
  }
  .review-image {
    width: 300px;
    height: 190px;
    object-fit: contain;
  }
  .carousel-item {
    width: 300px;
    height: 200px;
    transform: ${(props) => `translateX(${props.slide}px)`};
    transition: 0.5s ease;
  }
`;
export const TextWrapper = styled.div`
  .text-content {
    font-size: 15px;
    font-family:;
    height: 200px;
    background-color: aliceblue;
    padding: 30px 40px;
    border-radius: 10px;
  }
`;
