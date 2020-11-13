import loadingReducer from './loadingReducer';
import imageReducer from './imageReducer';
import errorReducer from './errorReducer';
import { combineReducers } from 'redux';
import pageReducer from './pageReducer';// Step-43

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer //Step-43
});

export default rootReducer;