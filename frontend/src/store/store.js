import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ProductListReducer from './reducer/productListReducer';
import {ProductDetailReducer} from './reducer/productDetailReducer';
import {addToCartReducer} from './reducer/addToCardReducer';
import thunk from 'redux-thunk';

const initialState = {}
const reducer = combineReducers({
    productList:ProductListReducer,
    productDetail:ProductDetailReducer,
    cart:addToCartReducer
})
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);
export default store