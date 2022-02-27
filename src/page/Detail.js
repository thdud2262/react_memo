import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { deleteMemoFB } from "../redux/modules/memo";


function Detail() {
  const memo_data = useSelector((state)=> state.memo.list)
  // console.log(memo_data)
  const dispatch = useDispatch()
  const history = useHistory();
  const index = useParams().idx
  // console.log(memo_data[index].id)
  
  const delMemo = () => {  
    if(window.confirm('게시물을 삭제할까요?')){
      dispatch(deleteMemoFB(memo_data[index].id))
      history.push('/')
    }
  }

  const updateGo = ()=> {
    history.push(`/update/${index}`)
  }
  return (
    <Contain>
      <App >
        <Title>
          <SubTitle>제목</SubTitle>
          <TitleText>{memo_data[index].title}</TitleText>
        </Title>
        <div>
          <SubTitle>내용</SubTitle>
          <ContentsText>{memo_data[index].contents}</ContentsText>
        </div>
      </App>
      <BtnBox>
        <button onClick={()=> {history.push('/')}}>메인으로</button>
        <button onClick={delMemo}>삭제</button>
        <button onClick={updateGo}>수정</button>
      </BtnBox>
    </Contain>
  );
}

const Contain = styled.div`
  width: 800px;
  height: 500px;
  margin: 50px auto;
`;
const App = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  border: 5px solid #ffec99;
  padding: 15px;
  box-sizing: border-box;
  margin: 30px auto;
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
const TitleText = styled.div`
  background: white;
`;
const SubTitle = styled.span`
  padding: 5px 15px;
  color: #f08c00;
  font-weight: 600;
  font-size: 20px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 10px ;
`;
const ContentsText = styled.div`
  margin-top: 10px;
  height: 155px;
  padding: 15px; 
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffec99;
`;
const BtnBox = styled.div`
  width : 200px;
  margin: 0 auto;
  display: flex;
  justify-content : space-between
`;
export default Detail ;
