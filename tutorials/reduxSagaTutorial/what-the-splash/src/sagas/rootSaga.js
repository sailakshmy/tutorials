/*import {takeEvery, put, take, call} from 'redux-saga/effects';
import {IMAGES} from '../constants/index'; //Step-33

//Watcher Saga
function* rootSaga(){
    yield takeEvery(IMAGES.LOAD,handleImagesLoadSaga);//Step-34

}
//Worker Saga
function* handleImagesLoadSaga(){
    console.log('Fetching Images from Unsplash'); //Step-35
}
/* //Watcher Saga
function* rootSaga(){
  // console.log("Hey World from rootSaga");
    yield takeEvery('HELLO', workerSaga);
    yield take('LOGIN');//Step-27
    yield call(workerSaga);//Step-27
    /*yield take('ADD_TO_CART');//Step-28
    yield take('BUY');//Step-28 *///Step-31 *///STep-32
    /*yield take('LOGOUT');//Step-28
    yield call(workerSagaLogout);//Step-30
}

//Worker Saga
function* workerSaga(){
console.log("Hey from worker Saga");
console.log(put({type:'ACTION_FROM_WORKER'}));
yield put({type:'ACTION_FROM_WORKER'}); // Step-23
}

//Worker Saga for LOGOUT action
function* workerSagaLogout(){//Step-30
    console.log("Bye Bye from Logout Worker Saga");
    yield put({type:'ACTION_FROM_LOGOUT_WORKER_SAGA'});
} */ //Step -32

//export default rootSaga; */ Step-45
import imagesSaga from './imagesSaga';//Step-46

export default imagesSaga; //Step-46