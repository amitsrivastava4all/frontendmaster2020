import {createStore} from 'redux';
import {reducer} from '../reducers/crud';
export const store = createStore(reducer);
store.subscribe(()=>{
    console.log('Store is Subscribe ',store.getState());
});
