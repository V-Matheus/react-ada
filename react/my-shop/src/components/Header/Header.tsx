import React, { useState } from 'react';
import * as S from './styles';

import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer,
  );

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;
  const dispatch = useDispatch();

  function handleUserAuth() {
    if (user === null) {
      dispatch({
        type: 'user/login',
        payload: {
          name: 'victor Mathes',
          email: 'victormatheus507@gmail.com',
        },
      });
    } else {
      dispatch({
        type: 'user/logout',
      });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CardButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CardButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};

export default Header;
