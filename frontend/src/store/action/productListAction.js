import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../../constants/productListConstant'

import {
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../../constants/productListConstant'
import axios from 'axios';
const Listproduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const  {data}  = await axios.get("/api/product")
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

const listProductDetails = (productID) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productID })
        const  {data}  = await axios.get("/api/product/" + productID)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
    }
}
export {Listproduct,listProductDetails} 