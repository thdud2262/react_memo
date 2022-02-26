import React from "react";
import { useDispatch } from 'react-redux';


import styled from "styled-components";
import { createMemo } from "../redux/modules/memo";


function Input() {
  const dispatch = useDispatch()  
  const titRef = React.useRef(null)
  const contRef = React.useRef(null)

  const goEnter= ()=> {
    const titText = titRef.current.value
    const contText = contRef.current.value
    console.log(titText,contText )
    titRef.current.value = "";
    contRef.current.value = "";
    window.alert('메모가 작성되었습니다');
    dispatch(createMemo({title:titText, contents:contText, check:false}))
  }

  return (
  <>
    <Contain className='title'>
      <InputBox className='title__box'>
        <TitleBox>
          <Label>제목</Label>
          <TextInput ref={titRef} type='text' placeholder="제목을 입력하세요" />
        </TitleBox>
        <ContentsBox>
          <Label>내용</Label>
          <TextArea ref={contRef} type='text' placeholder="메모 내용을 입력하세요"/>
        </ContentsBox>
      </InputBox>
      <Button onClick={goEnter}>입력</Button>
    </Contain>
  </>
  );
}

const Contain = styled.div`
  width: 800px;
  margin: 35px auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
`;
const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
const TitleBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const ContentsBox = styled.div`
  display: flex;
  align-items: center;
`;
let Label = styled.label`
  width : 60px;
  margin-right : 10px;
  text-align: center;
`;

const TextInput = styled.input`
  width: 620px;
  height: 45px;
  padding-left: 15px;
  box-sizing: border-box;
`;
const TextArea = styled.textarea`
  width : 620px;
  height : 120px;
  padding: 15px;
  box-sizing: border-box;

`;
const Button = styled.button``
export default Input
