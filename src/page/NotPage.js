// import './NotPage.css';
import styled from "styled-components";


function NotPage() {
  return (
    <>
      <Page>
        <ImgBox>
          <img src="./img/imozi.PNG"/>
        </ImgBox>
        <p>잘못 들어오셨어요!</p>
        <button>홈으로 돌아갈게요!</button>
      </Page>
    </>

  );
}

const Page = styled.div`
  width: 800px;
  height: 500px;
  margin: 50px auto;
  text-align: center;
`;
const ImgBox = styled.div`
  border : 
  margin-bottom : 30px;
`;
export default NotPage;
