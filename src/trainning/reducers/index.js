import status from './status';
import soft from './soft';
import {combineReducers} from 'redux' ; 

const myReducer = combineReducers({
    status,
    soft
})


export default  myReducer;