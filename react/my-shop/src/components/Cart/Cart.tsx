import React from 'react'
import * as S from './styles'

interface CartProps {
  showCart: boolean
}

const Cart:React.FC<CartProps> = ({showCart}) => {
  return (
    <S.Container showCart={showCart}>
      <S.Title>
        Carrinho
      </S.Title>
    </S.Container>
  )
}

export default Cart