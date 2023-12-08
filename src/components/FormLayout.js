import styled from 'styled-components';

function FormLayout({ children, title }) {
  return (
    <FormLayoutBox>
      <FormBox>
        <h1 className="title">{title}</h1>
        <p>
          여행을 즐기는 새로운 경험 <br /> 위즈 트립에서 여행계획을 함께 짜고
          공유해보세요
        </p>
        <div>{children}</div>
      </FormBox>
    </FormLayoutBox>
  );
}
export default FormLayout;
const FormLayoutBox = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormBox = styled.div`
  width: 404px;
  height: 663px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  box-shadow:
    -2.17893px -2.17893px 6.5368px #ffffff,
    2.17893px 2.17893px 6.5368px rgba(174, 174, 192, 0.4);
  border-radius: 20px;

  .title {
    color: ${({ theme }) => theme.mainAccentColor};
    font-size: 36px;
    margin-bottom: 20px;
    margin-top: 0;
  }
  p {
    color: ${({ theme }) => theme.gray400Cool};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    font-family: Pretendard Variable;
    text-align: center;
    line-height: 1.6;
    margin: 0;
  }
`;
