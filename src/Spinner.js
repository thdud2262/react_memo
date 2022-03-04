import React from "react";
import styled, { keyframes } from "styled-components"



const Spinner = (props) => {
  return (
    <Outter>
      <ImgBox>
        <Img src = '/img/sun.png'/>
      </ImgBox>
    </Outter>
  )
}

const Outter = styled.div`
  background: #ffec99;
  width: 100vw;
  height : 100vh;
  position: fixed;
  top: 0;
  
`;
const Img = styled.img`
  width : 150px;
  height : 150px;
  border-radius: 100px;
  margin: 0 auto;
`;
const imgAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50%{
    transform : rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 200px;
  justify-content: center;
  animation: ${imgAnimation} 2s infinite linear alternate
`;


export default Spinner; 