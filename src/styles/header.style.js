import { styled } from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  /* width: 77.5%; */
  height: 80px;
  margin: auto;
  margin-top: 29px;
  margin-bottom: 15px;
  button {
    width: 100px;
    height: 55px;
    background-color: ${({ theme }) => theme.mainAccentColor};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.gray50};
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #5a40de;
    }
  }

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      color: #000;
      font-family: Wanted Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
    }
  }
`;

export const MenuBox = styled.div`
  position: absolute;
  margin-right: 2rem;
  width: 165px;
  height: 85px;
  border-radius: 5px;
  background: #f7f8f9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;

  .menu-text {
    margin: 5px;
    color: var(--gray900, #1b1d1f);
    font-family: Wanted Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    cursor: default;
  }
`;

export const FlipBox = styled.div`
  width: 200px;
  height: 70px;
  perspective: 1000px;
  img {
    width: 200px;
  }

  .flip-item {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: 0.5s;
  }
  .black,
  .white {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

  .black {
    transform: rotateY(180deg);
  }

  &:hover {
    .flip-item {
      transform: rotateY(-180deg);
    }
  }
`;
