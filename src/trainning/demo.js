import {createStore} from 'redux';
import { status, soft } from './action/index';
import myReducer from './reducers/index'

const store = createStore(myReducer); 
console.log('Default:', store.getState());

// thực hiện công việc thay đổi status
store.dispatch(status());
console.log('toggle:', store.getState());
// thực hiện công việc sắp xếp từ A-Z
store.dispatch(soft({
    by : 'name',
    value : -1
}));
console.log('store:', store.getState());


