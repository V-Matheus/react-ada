import React from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

interface CartProps {
  showCart: boolean;
}

const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer,
  );

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price
  }, 0)

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductsItem key={product.id}>
            <strong>
              {product.title} - {product.price}
            </strong>
          </S.CartProductsItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal>Total: ${total}</S.CartTotal>
    </S.Container>
  );
};

export default Cart;
