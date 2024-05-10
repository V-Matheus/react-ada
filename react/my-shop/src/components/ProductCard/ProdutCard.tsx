import React from 'react';
import * as S from './styles';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '../../data/products';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

interface ProductCardProps {
  product: Product;
}

const ProdutCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer,
  );

  const isProductOnCart =
    cart.find((productOnCard) => product.id === productOnCard.id) !== undefined;

  const dispatch = useDispatch();

  function handleAddProductToCart() {
    dispatch({
      type: 'cart/add-product',
      payload: product,
    });
  }

  function handleRemoveProductFromCart() {
    dispatch({
      type: 'cart/remove-product',
      payload: product
    })
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            ),
          )}
          {` (${product.rating.rate})`}
        </S.Review>

        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCardButtonWapper>
        {!isProductOnCart ? (
          <S.AddToCardButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
            <FiShoppingCart />
          </S.AddToCardButton>
        ) : (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        )}
      </S.AddToCardButtonWapper>
    </S.Card>
  );
};

export default ProdutCard;
