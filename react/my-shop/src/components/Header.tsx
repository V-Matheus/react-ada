import React from 'react';
import * as S from './styles';

import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton>
            Login
            <FiLogIn />
          </S.AuthButton>

          <S.CardButton>
            Carrinho
            <FiShoppingCart />
          </S.CardButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};

export default Header;
