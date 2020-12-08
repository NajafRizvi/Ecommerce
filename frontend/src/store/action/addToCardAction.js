import axios from "axios";
import { CART_ADD_ITEM,CART_REMOVE_ITEM } from "../../constants/addToCardConstant";

export const addToCart = (productID, qty) => async (dispatch,getState) => {
    const { data } = await axios.get("/api/product/" + productID);
    dispatch({
        type: CART_ADD_ITEM, payload: {
        product: data.id,
        name: data.name,
        image: data.imageSrc,
        price: data.price,
        qty,
      },
    });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
};
export const removeFromCart = (productId) => (dispatch,getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  // const { cart: { cartItems } } = getState();
  // Cookie.set("cartItems", JSON.stringify(cartItems));
}
 

