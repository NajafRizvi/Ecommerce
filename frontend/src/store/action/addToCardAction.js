import axios from "axios";
import { CART_ADD_ITEM } from "../../constants/addToCardConstant";

const addToCart = (productID, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/product/" + productID);
    dispatch({
        type: CART_ADD_ITEM, payload: {
        product: data.id,
        name: data.name,
        image: data.imageSrc,
        price: data.price,
        qty
      }
    });
    // const { cart: { cartItems } } = getState();
    // Cookie.set("cartItems", JSON.stringify(cartItems));

  } catch (error) {

  }
}
// const removeFromCart = (productId) => (dispatch, getState) => {
//   dispatch({ type: CART_REMOVE_ITEM, payload: productId });

//   const { cart: { cartItems } } = getState();
//   Cookie.set("cartItems", JSON.stringify(cartItems));
// }

export { addToCart }