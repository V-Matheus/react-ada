import React, { useState } from 'react';
import * as S from './styles';

import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import Cart from '../Cart/Cart';

const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false)
  const isLogged = false

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CardButton onClick={() => setShowCart(!showCart)}> 
            Carrinho
            <FiShoppingCart />
          </S.CardButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart}/>
    </S.StyledHeader>
  );
};

export default Header;
