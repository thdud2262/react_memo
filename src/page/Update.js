import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { updateMemo } from "../redux/modules/memo";


function Update() {
  const memo_data = useSelector((state)=> state.memo.list)
  // console.log(memo_data)
  const dispatch = useDispatch()
  const history = useHistory();
  const index = useParams().idx
  // console.log(index)

  const titRef = React.useRef(null)
  const contRef = React.useRef(null)

  const update = ()=> {
    console.log('수정완료')
    const titText = titRef.current.value
    const contText = contRef.current.value
    // console.log(titText, contText)
    
    const memo = {title : titText, contents:contText, check:false } 
    dispatch(updateMemo(index, memo))
    window.confirm('게시물이 수정되었습니다')
    history.push('/')
  }

  return (
    <Contain>
      <App >
        <Title>
          <SubTitle>제목</SubTitle>
          <TextInput type='text' ref={titRef} defaultValue={memo_data[index]? memo_data[index].title : ""}/>
        </Title>
        <ContentsBox>
          <SubTitle>내용</SubTitle>
          <TextArea type='text' ref={contRef} defaultValue={memo_data[index]? memo_data[index].contents : ""}/>
        </ContentsBox>
      </App>
      <BtnBox>
        <button onClick={()=> {history.push('/')}}>메인으로</button>
        <button onClick={update}>수정완료</button>
      </BtnBox>
    </Contain>
  );
}

const Contain = styled.div`
  width: 800px;
  margin: 50px auto;
`;
const App = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 15px;
  background-color: #ffec99;
  padding: 30px;
  box-sizing: border-box;
  margin: 30px auto;
  display
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
const SubTitle = styled.span`
  padding: 5px 15px;
  background: white;
  border-radius: 5px;
  display: inline-block;
  margin-right: 10px ;
`;
const TextInput = styled.input`
  width: 90%;
  height: 45px;
  padding-left: 15px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 7px;
`;
const ContentsBox = styled.div`
  display: flex;
  align-items: center;
`;
const TextArea = styled.textarea`
  width : 90%;
  height : 120px;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 7px;
`;
const BtnBox = styled.div`
  width : 200px;
  margin: 0 auto;
  display: flex;
  justify-content : space-between
`;
export default Update;
