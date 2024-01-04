import styled from 'styled-components';
export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 3;
  display: ${(props) => (props.isopen === true ? 'fixed' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalWrapper = styled.div`
  width: 364px;
  height: 475px;
  background-color: #fff;
  padding: 20px;
  display: ${(props) => (props.isopen === true ? 'fixed' : 'none')};
  position: absolute;
  top: 30%;
  left: 40%;
  z-index: 4;
  border-radius: 27px;
  border: 1px solid #e8ebed;
  font-family: 'Pretendard';
  button {
    border: none;
    cursor: pointer;
  }
  .submit-button {
    width: 88px;
    height: 30px;
    background-color: ${({ theme }) => theme.mainAccentColor};
    border-radius: 16px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
  }
  .close-modal-button {
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
  }
  .button-box {
    display: flex;
    justify-content: flex-end;
  }
`;

export const FormWrapper = styled.form`
  margin-top: 28px;
  strong {
    color: ${({ theme }) => theme.subAccentColor};
  }
  textarea {
    width: 217px;
    height: 84px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.background};
    border: none;
  }

  input {
    width: 217px;
    height: 30px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.background};
    border: none;
  }

  .field {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }

  .label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    width: 100px;
    margin: 0;
    height: inherit;
  }
  .address-box {
    display: flex;
    flex-direction: column;
  }
`;

export const Selecter = styled.select`
  width: 100px;
  height: 30px;
  padding: 7px 19px;
  appearance: none;
  font-size: 12px;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
`;
