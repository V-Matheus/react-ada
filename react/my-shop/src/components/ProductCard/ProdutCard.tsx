import React from 'react';
import * as S from './styles';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProdutCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Card>
      <S.ProductImage
        src={product.image}
        alt={product.description}
      />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>{product.rating.rate}</S.Review>

        <S.Price>{product.price}</S.Price>
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
