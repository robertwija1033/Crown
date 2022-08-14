import {
  CartDropdown,
  CartIcon,
  CartItems,
  ContainerLogo,
  ContainerNavbar,
  ContainerNavLinks,
  EmptyMessage,
  Image,
  Item,
  ItemCount,
  ItemDetail,
  Name,
  NavLink,
  ShoppingIcon,
} from "../../styles/navbar/Navbar";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cart/cartContext";
import { signOutUser } from "../../utils/firebase";
import Button from "../button/Button";

const Navbar = () => {
  const [isCartClick, setIsCartClick] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { cartTotal, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <ContainerNavbar>
      <ContainerLogo to="/">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/images/crown.svg`}
          alt="crown"
        />
      </ContainerLogo>
      <ContainerNavLinks>
        <NavLink to="/shop">SHOP</NavLink>
        {currentUser ? (
          <NavLink as="span" to="/authentication" onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to="/authentication">SIGN IN</NavLink>
        )}
        <CartIcon onClick={() => setIsCartClick(!isCartClick)}>
          <img
            src={`${process.env.PUBLIC_URL}/images/shopping-bag.svg`}
            alt="crown"
          />
          <ItemCount>{cartTotal}</ItemCount>
        </CartIcon>
      </ContainerNavLinks>
      {isCartClick && (
        <CartDropdown>
          <CartItems>
            {cartItems.length ? (
              cartItems.map((product) => {
                const { id, name, quantity, imageUrl, price } = product;

                return (
                  <Item key={id}>
                    <img src={`${imageUrl}`} alt="crown" />
                    <ItemDetail>
                      <Name>{name}</Name>
                      <span className="price">
                        {quantity} x ${price}
                      </span>
                    </ItemDetail>
                  </Item>
                );
              })
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
          </CartItems>
          <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
        </CartDropdown>
      )}
    </ContainerNavbar>
  );
};

export default Navbar;
