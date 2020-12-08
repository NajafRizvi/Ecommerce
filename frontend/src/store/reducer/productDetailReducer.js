import {
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL   
  
} from '../../constants/productListConstant';

function ProductDetailReducer(state = { products: {} }, action) {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_DETAILS_FAIL :
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
export {ProductDetailReducer}