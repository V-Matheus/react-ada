import React from 'react';
import * as S from './styles';
import { Product } from '../../data/products';

interface CartProps {
  showCart: boolean;
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductsItem key={product.id}>
            <strong>{product.title}</strong> - {product.price}
          </S.CartProductsItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal data-testId="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
};

export default Cart;
