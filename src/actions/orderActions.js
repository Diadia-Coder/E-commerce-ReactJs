import Axios from "axios";
import {
  ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, 
  ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS, ORDER_DELETE_FAIL, 
  ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL
} from "../constants/orderConstants";

const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    //const { userSignin: { userInfo } } = getState();
    const { data: { data: newOrder } } = await Axios.post('http://localhost:5000/api/orders', order);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
}
const listOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });
    //const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get('http://localhost:5000/api/orders');
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
}
const detailsOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    //const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get('http://localhost:5000/api/orders' + orderId);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
}
const deleteOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });
    //const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.delete('http://localhost:5000/api/orders' + orderId);
    dispatch({ type: ORDER_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ORDER_DELETE_FAIL, payload: error.message });
  }
}
export { createOrder, detailsOrder, listOrders, deleteOrder };