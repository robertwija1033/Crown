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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userMemoization } from "../../redux/memoization/userMemoization";
import {
  CartMemoization,
  cartTotalMemoization,
} from "../../redux/memoization/cartMemoization";
import { signOutStart } from "../../redux/actions/userAction";
import Button from "../button/Button";

const Navbar = () => {
  const [isCartClick, setIsCartClick] = useState(false);
  const currentUser = useSelector(userMemoization);
  const cartItems = useSelector(CartMemoization);
  const cartTotal = useSelector(cartTotalMemoization);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <NavLink
            as="span"
            to="/authentication"
            onClick={() => dispatch(signOutStart())}
          >
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
