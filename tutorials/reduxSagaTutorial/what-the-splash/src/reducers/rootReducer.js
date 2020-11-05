import loadingReducer from './loadingReducer';
import imageReducer from './imageReducer';
import errorReducer from './errorReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer
});

export default rootReducer;