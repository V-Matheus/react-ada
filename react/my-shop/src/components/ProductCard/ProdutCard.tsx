import React from 'react';
import * as S from './styles';
import { FiShoppingCart } from 'react-icons/fi';

const ProdutCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImage
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        alt=""
      />

      <S.ProductTitle>Mens Casual Premium Slim Fit</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>4.1</S.Review>

        <S.Price>$22.3</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCardButtonWapper>
        <S.AddToCardButton>
          Adicionar ao Carrinho
          <FiShoppingCart />
        </S.AddToCardButton>
      </S.AddToCardButtonWapper>
      
    </S.Card>
  );
};

export default ProdutCard;
