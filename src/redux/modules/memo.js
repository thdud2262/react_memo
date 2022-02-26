// import { db } from '../../firebase'
// import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"


// Actions
const LOAD = 'memo/LOAD';
const CREATE = 'memo/CREATE';
const UPDATE = 'memo/UPDATE';
const DELETE = 'memo/DELETE';
const CHECK = 'memo/CHECK';



// Action Creators
export function loadMemo(memoList) {
  return { type: LOAD, memoList };
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
    {title: '영화보기', contents: '주술회전0 재밌따요!!!', check: false},
    {title: '코딩공부', contents: '리액트 빨리 적응해서 재미있게 공부하장', check: false},
    {title: '알바가기', contents: '월요일부터 알바가는 날입니다으', check: false},
  ],
}

// middleware : firebase랑 통신하는 함수
// firestore에서 데이터 가져오는 함수 = 비동기통신
export const loadMeomFB = () => {
  return async function(dispatch) {

  }
}

// Reducer                      // 파라미터에 = 기본값을 준다
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    
    // case "memo/LOAD" : {
    //   console.log(state)
    //   console.log(action)
    //   const new_memo_list = [];
    //   console.log(new_memo_list)
    //   return { list : new_memo_list};
    //   // return state
    // }
    case "memo/CREATE" : {
      console.log(state, action.memo)
      const new_memo_list = [...state.list, action.memo];
      // console.log(new_memo_list)
      return { list : new_memo_list};
    }

    case "memo/DELETE" : {
      console.log(state, action)
      const new_memo_list = state.list.filter((l,idx)=>{
        // console.log(l,idx)
        // console.log(action.memo_index)
        // console.log(parseInt(action.memo_index) !== idx )
        return parseInt(action.memo_index) !== idx
      })
      console.log(new_memo_list)
      return { list : new_memo_list};
    }

    case "memo/UPDATE" : {
      console.log(state, action)
      const new_memo_list = state.list.map((l,idx)=>{
        // console.log(l, idx)
        return ( parseInt(action.memo_index) === idx ) ? { title:action.memo.title, contents:action.memo.contents, check:action.memo.chekc} : l
      })
      console.log(new_memo_list)
      return {...state, list : new_memo_list};
    }

    default: return state;
  }
}