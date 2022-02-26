import styled from "styled-components";

import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

function MemoList() {

  
  const history = useHistory();
  const memo = useSelector((state)=>state.memo.list)
  console.log(memo)

  return (
    <>
      {memo.map((m,idx)=>{
        return(
          <App key={idx} onClick={()=> {history.push(`/detail/${idx}`)}}>
          <Title >
            <SubTitle>제목</SubTitle>
            <TitleText>{m.title}</TitleText>
          </Title>
          <Contents >
            <SubTitle>내용</SubTitle>
            <ContentsText>{m.contents}</ContentsText>
          </Contents>
        </App>
        )
      })}
    </>


  );
}
const App = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  border: 5px solid #ffec99;
  padding: 15px;
  box-sizing: border-box;
  margin: 15px;
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
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
const TitleText = styled.div`
  background: white;
`;
const Contents = styled.div``;
const ContentsText = styled.div`
  margin-top: 10px;
  height: 155px;
  padding: 15px; 
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffec99;
`;
export default MemoList;
