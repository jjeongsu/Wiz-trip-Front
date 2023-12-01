import { styled } from 'styled-components';

export const Card = styled.div`
  width: 250px;
  height: 319px;
  margin-top: 20px;
  .image-container {
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    max-width: 250px;
    max-height: 250px;
    overflow: hidden;
    z-index: 0;
  }

  .card-image {
    width: 245px;
    border-radius: 10px;
    height: 245px;
    overflow: hidden;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1);
    }
  }
  .card-heart-button {
    background: transparent;
    border: none;
    position: absolute;
    top: 10px;
    right: 5px;
    cursor: pointer;
    z-index: 1;
  }

  .text-container {
    padding-left: 10px;
    h2 {
      font-size: 18px;
      margin: 0;
      color: ${({ theme }) => theme.gray600};
      margin-top: 5px;
    }

    p {
      font-size: 16px;
      margin: 0;
      color: ${({ theme }) => theme.gray400Cool};
      margin-top: 5px;
    }
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  .modal-body {
    width: 873px;
    height: 662px;
    border-radius: 20px;
    background: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
    button {
      background: transparent;
      border: none;
      position: absolute;
      top: 34px;
      right: 34px;
      cursor: pointer;
    }
  }
  .modal-contents {
    display: flex;
  }
  .modal-image {
    min-width: 300px;
  }
  .modal-text {
    margin-left: 27px;

    h2 {
      margin: 0px;
      font-size: 36px;
      margin-bottom: 5px;
    }
    span {
      font-size: 24px;
      color: ${({ theme }) => theme.gray400Cool};
    }
    p {
      font-size: 16px;
      color: ${({ theme }) => theme.gray600};
      line-height: 1.6;
      text-align: justify;
    }
  }
`;
