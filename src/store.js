import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import Cookies from 'js-cookie';
import thunk from 'redux-thunk';

import {
  productListReducers,
  productDetailsReducer,
  productDeleteReducer,
  productSaveReducer,
} from './reducers/productReducers';

import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './reducers/userReducers';

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListReducer,
  orderDeleteReducer,
} from './reducers/orderReducers';

import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
});

const cartItems = Cookies.get('cartItems') || [];
const userInfo = Cookies.get('userInfo') || null;

const initialState = {
  cart: { cartItems },
  userSignin: { userInfo },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);
export default store;
