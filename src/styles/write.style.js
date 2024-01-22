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

export const WriteWrapper = styled.div`
  width: 641px;
  height: 900px;
  background-color: #ffffff;
  border-radius: 37px 37px 0px 0px;
  position: relative;
  padding: 65px 75px 0px 75px;
  display: flex;
  flex-direction: column;
  .pink {
    position: absolute;
    right: 90px;
    top: -50px;
    width: 89px;
    height: 89px;
  }

  .blue {
    position: absolute;
    left: -77px;
    bottom: 200px;
  }

  .logo-btn {
    animation: rotate 20s linear 1s infinite;
  }

  .logo-btn.pink {
    animation-duration: 10s;
  }
  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
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

export const PhotoRecordWrapper = styled.div`
  position: relative;
  h2 {
    font-size: 18px;
  }

  .upload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    cursor: pointer;
    border-radius: 3px;
    color: ${({ theme }) => theme.subAccentColor};
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    left: 110px;
    top: 11px;
  }
  .image-uploader {
    display: none;
  }
  .thumbnails {
  }
  img.small-thumbnail {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: 5px 10px;
  }
`;
export const TextRecordWrapper = styled.div`
  h2 {
    font-size: 18px;
    margin-bottom: 0;
  }
  p {
    color: ${({ theme }) => theme.paleAccentColor};
    font-size: 10px;
  }

  .text-container {
    max-width: 470px;
    max-height: 400px;
    height: 250px;
    width: 100%;
    border: none;
    padding: 10px 20px 20px 20px;
    background-color: ${({ theme }) => theme.background};
    line-height: 1.5;
    &:focus {
      outline: 0;
    }
  }
`;

export const SubmitRecord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom
  }
  margin-top: 20px;
  button.submit-btn {
    width: 150px;
    height: 40px;
    background-color: aliceblue;
    border-radius: 20px;
    color: ${({ theme }) => theme.subAccentColor};
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    &:hover {
      animation: fill-background 0.7s ease-out;
      animation-fill-mode: forwards;
    }
    @keyframes fill-background {
      from {
        background-color: aliceblue;
      }
      to {
        background-color: ${({ theme }) => theme.subAccentColor};
        color: white;
      }
    }
  }
`;
