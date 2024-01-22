import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../assets/404.jpg';
function Notfound() {
  return (
    <NotfoundBox>
      <img src={background} alt="backgroundimage" className="image" />
      <div className="content">
        <h1>Oops!</h1>
        <h2> 404 - Page not found </h2>
        <p>
          The page you are looking for might have been removed
          <br />
          had its name changed or is temporaily unavailable.
        </p>
        <button className="home-button">
          <Link to="/">Go back to wiz-trip home</Link>
        </button>
      </div>
    </NotfoundBox>
  );
}

const NotfoundBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: white;
    margin-top: 90px;
    margin-right: 10px;
    text-align: center;
  }

  .home-button {
    border: none;
    width: 300px;
    height: 60px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.mainAccentColor};
    padding: 20px 20px;
    cursor: pointer;
    margin-top: 10px;
    a {
      color: #fff;
      font-size: 20px;
      font-family: Wanted-Sans;
      font-weight: 600;
    }
  }

  h1 {
    font-size: 50px;
    margin: 0;
  }
`;

export default Notfound;
