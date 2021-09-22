import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// 초기 데이터
const initialState = {
  // name: '초기값 이름',
  // age: '22',
  // password: '1234',
  user: {
    // 이 부분을 user.js로 보냈다.
    // isLoggedIn: false,
    // user: null,
    // signUpdata: {},
    // loginData: {}  이부분을 user.j
  },
  post: {

  },
};

//* rootReducer함수
// 정의: (이전상태 + 액션) => 다음상태
// const rootReducer = (state = initialState, action) => {
const rootReducer = combineReducers({
  // HYDERATE(서버사이드 렌더링 사용하기 위한 도구)를 사용하기 위해서 아래의 index 리듀서 추가.
  index: (state = {}, action) => {
    switch (action.type) {
      // getInitialProps를 쓰지 않고, getStaticProps, serversideProps를 사용하며 생김.
      case HYDRATE:
        return { ...state, ...action.payload };
        // user와 관련있는 것들을 user.js로 보낸다.
        // case 'LOG_IN' :
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             isLoggedIn: true,
        //             user: action.data,
        //         }
        //     };
        // case 'LOG_OUT' :
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             isLoggedIn: false,
        //             user: null,
        //         }
        //     };
      default:
        return state;
    }
  },
  //* 분리한 리듀서인 user.js, post.js의 reducer를 그대로 사용함.
  user,
  post,
});

export default rootReducer;
