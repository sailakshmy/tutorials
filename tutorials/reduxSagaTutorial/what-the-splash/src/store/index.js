import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'; //Step 8
import rootSaga from '../sagas/rootSaga';//Step-16

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware(); //Step-9
    const store = createStore(
        rootReducer,
        compose( //Step-12
            applyMiddleware(sagaMiddleware),//Step-11
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        
    );
    sagaMiddleware.run(rootSaga);//Step-13; //Step-17-to pass the RootSaga as a parameter to the run function

   /* store.dispatch({type:'HELLO'});//Step-21: Trial only.
    store.dispatch({type:'HELLO'}); //Step-24:- Trial only
    store.dispatch({type:'HELLO'});//Step-24: Trial Only.
    //store.dispatch({type:'LOGOUT'}); //Step-29
    store.dispatch({type:'LOGIN'}); //Step-26: Take effect trial
    store.dispatch({type:'LOGIN'}); //Step-26: Take effect trial
    store.dispatch({type:'LOGIN'}); //Step-26: Take effect trial
    store.dispatch({type:'LOGOUT'}); *///Step-36
    
    return store;
}

export default configureStore;