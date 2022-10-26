import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = ({ onClick }) => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer
      onClick={() => {
        setIsCartOpen();
      }}
    >
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
