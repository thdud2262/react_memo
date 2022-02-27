import { db } from '../../firebase'
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"


// Actions
const LOAD = 'memo/LOAD';
const CREATE = 'memo/CREATE';
const UPDATE = 'memo/UPDATE';
const DELETE = 'memo/DELETE';
const CHECK = 'memo/CHECK';



// Action Creators
export function loadMemo(memo_list) {
  return { type: LOAD, memo_list };
}
export function createMemo(memo) {
  return { type: CREATE, memo };
}
export function updateMemo(memo_index, memo) {
  return { type: UPDATE, memo_index, memo };
}
export function deleteMemo(memo_index) {
  return { type: DELETE, memo_index };
}
export function checkMemo(memo_index) {
  return { type: CHECK, memo_index };
}


//initialState
const initialState = {
  list : [
    // {title: '영화보기', contents: '주술회전0 재밌따요!!!', check: false},
    // {title: '코딩공부', contents: '리액트 빨리 적응해서 재미있게 공부하장', check: false},
    // {title: '알바가기', contents: '월요일부터 알바가는 날입니다으', check: false},
  ],
}

// middleware : firebase랑 통신하는 함수
// firestore에서 데이터 가져오는 함수 = 비동기통신
export const loadMemoFB = () => {
  return async function(dispatch) {
    const memo_data = await getDocs (collection(db, 'memo'));
    // console.log(memo_data)
    let memo_list = []
    memo_data.forEach((m)=>{
      // console.log(m.data(), m.id)
      memo_list.push({ id: m.id, ...m.data()})
    })
  dispatch(loadMemo(memo_list))
  }
}

export const createMemoFB = (memo) => {
  return async function(dispatch) {
    // console.log(memo)
    const docRef = await addDoc(collection(db, "memo"), memo);
    const _memo = await getDoc(docRef)
    // console.log(_memo.id, _memo.data())
    const memo_data = {id:_memo.id, ..._memo.data()} 
    dispatch(createMemo(memo_data))
  }
}

export const deleteMemoFB = (memo_id) => {
  return async function(dispatch, getState) {
    // firebase의 id를 찾아서 지워줌
    // console.log(memo_id)
    await deleteDoc(doc(db, "memo", memo_id ));
    // store의 data를 지워줘야햠
    // 전체store data에서 id와 맞는 index찾아서 지워줌
    // console.log(getState().memo.list)
    const _memo_list = getState().memo.list
    const memo_data = _memo_list.findIndex((m)=>{
      // console.log(m.id === memo_id)
      return m.id === memo_id
    })
    // console.log(memo_data)
    dispatch(deleteMemo(memo_data))
  }
}

export const updateMemoFB = (memo_id, memo_data) => {
  return async function(dispatch, getState) {
    console.log(memo_id,memo_data)
    // firebase 수정 
    const docRef = doc ( db, "memo", memo_id )
    await updateDoc(docRef, { title : memo_data.title, contents: memo_data.contents, check: false })
    
    // redux 데이터 수정 (화면 렌더링)
    const _memo_list = getState().memo.list
    // console.log(_memo_list)
    const memo_index = _memo_list.findIndex((m)=>{
      // console.log(m)
      return m.id === memo_id
    })
    // console.log(memo_index)
    dispatch(updateMemo(memo_index, memo_data))
  }
}

// Reducer                      // 파라미터에 = 기본값을 준다
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "memo/LOAD" : {
      // console.log(state, action)
      const new_memo_list = [...action.memo_list];
      // console.log(new_memo_list)
      return { list : new_memo_list};
    }

    case "memo/CREATE" : {
      // console.log(state, action)
      const new_memo_list = [...state.list, action.memo];
      // console.log(new_memo_list)
      return { list : new_memo_list};
    }

    case "memo/DELETE" : {
      console.log(state, action)
      const new_memo_list = state.list.filter((l,idx)=>{
      //   // console.log(l,idx)
      //   // console.log(action.memo_index)
      //   // console.log(parseInt(action.memo_index) !== idx )
        return parseInt(action.memo_index) !== idx
      })
      // console.log(new_memo_list)
      return { list : new_memo_list};
    }

    case "memo/UPDATE" : {
      console.log(state, action)
      const new_memo_list = state.list.map((l,idx)=>{
        // console.log(l, idx)
        return ( parseInt(action.memo_index) === idx ) ? { title:action.memo.title, contents:action.memo.contents, check:action.memo.chekc} : l
      })
      return {...state, list : new_memo_list};
    }

    default: return state;
  }
}