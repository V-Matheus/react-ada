import React from 'react';
import * as S from './styles';
import ProdutCard from '../ProductCard/ProdutCard';
import { products } from '../../data/products';

const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProdutCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};

export default ProductsList;
