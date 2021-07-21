import {createStore} from 'redux';
import updateProductName from './ShopReducer'
const store = createStore(updateProductName)
export default store;