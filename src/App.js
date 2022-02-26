import React, { useState } from 'react';
import styled from "styled-components";
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';

import './App.css';
import { Input, Detail, MemoList, Update, NotPage } from './page/index';
import { loadMemo } from './redux/modules/memo';

function App() {
  
  React.useEffect(()=>{
    // dispatch(loadMemo())
  },[])

  return (
    <div className='App'>
      <Contain>
        <Title> MEMO </Title>
        <MemoBox>
          <Switch>
            <Route path='/' exact>
              <Contents>
                <Input/>
                <Box>
                  <MemoList />
                </Box>
              </Contents>
            </Route>
            <Route  path='/detail/:idx' component={Detail} />
            <Route  path='/update/:idx' component={Update} />
            <Route component={NotPage} />
          </Switch>
        </MemoBox>
      </Contain>
    </div>
  );
}


const Contain = styled.div`
  width : 100%;
  height : 100vh;
  `;
const Title = styled.div`
  background : #ffec99;
  height : 70px;
  padding: 15px;
  box-sizing: border-box;
  font-size : 25px;
  text-align: center;
  font-weight : 600;
`;
const MemoBox = styled.div`
  width: 100%;
  height: 100%;
`;
const Contents = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
const Box = styled.div`
  display : flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export default App;
