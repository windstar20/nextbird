import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

//* 로그인 API 호출(3)

// function logInApi(data) {
//     return axios.post('/api/login', data);
// }

//* 로그인 액션 제너레이터(2)

// function* logIn(action) {
//     try {
//         //call 동기, fork 비동기
//         // const result = yield call(logInApi, action.data);
//         yield delay(1000);//백엔드 서버 준비되기까지 임시 사용.
//         //요청은 성공 또는 실패로 처리
//         //* put의 역할은 Dispatch와 같음
//         yield put({
//             type: 'LOG_IN_SUCCESS',
//             // data: result.data,     //성공 결과 값
//         });
//     } catch (err) {
//         yield put({
//             type: 'LOG_IN_FAILURE',
//             data: err.response.data, //실패 결과 값
//         })
//     }
// }
//
// function logOutApi() {
//     return axios.post('/api/logout');
// }
//
// function* logOut() {
//     try {
//         // yield call(logOutApi);
//         yield delay(1000);
//         //* put의 역할은 Dispatch와 같음
//         yield put({
//             type: 'LOG_OUT_SUCCESS',
//         });
//     } catch (err) {
//         yield put({
//             type: 'LOG_OUT_FAILURE',
//             data: err.response.data,
//         })
//     }
// }

// function addPostApi(data) {
//     return axios.post('/api/logout', data);
// }
//
// function* addPost(action) {
//     try {
//         // const result = yield call(addPostApi, action.data);
//         yield delay(1000);
//         //* put의 역할은 Dispatch와 같음
//         yield put({
//             type: 'ADD_POST_SUCCESS',
//             // data: result.data
//         });
//     } catch (err) {
//         yield put({
//             type: 'ADD_POST_FAILURE',
//             data: err.response.data,
//         })
//     }
// }

//* 로그인 액션(1)

// function* watchLogin() {
//     yield takeLatest('LOG_IN_REQUEST', logIn);
// }
// function* watchLogOut() {
//     yield takeLatest('LOG_OUT_REQUEST', logOut);
// }

// function* watchAddPost() {
//     yield throttle('ADD_POST_REQUEST', addPost, 2000);
// }

//* fork와 call의 차이점
export default function* rootSaga() {
  yield all([ // all: 배열 안에 있는 것들을 동시 실행
    fork(userSaga),
    fork(postSaga),
    // fork(watchAddPost),
  ]);
}

// while take 동기 동작. - 한번 호출된 뒤 함수가 사라짐.
// takeEvery 비동기 동작 - 호출되어도 사라지지 않음.
// takeLatest - 마지막 요청만 요청, 응답을 취소함
// 프런트: 요청1, 요청2  백: 응답1X, 응답2
// 쓰로틀: 정한 시간내에는 1번만 요청.
// takeLead - 첫 번째 요청
