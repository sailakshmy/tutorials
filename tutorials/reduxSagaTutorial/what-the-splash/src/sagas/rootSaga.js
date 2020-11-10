import {takeEvery} from 'redux-saga/effects';

//Watcher Saga
function* rootSaga(){
    //console.log("Hey World from rootSaga");
    yield takeEvery('HELLO', workerSaga)
}

//Worker Saga
function* workerSaga(){
console.log("Hey from worker Saga");
}

export default rootSaga;