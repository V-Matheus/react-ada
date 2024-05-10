import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import { products } from '../../data/products';

const cart = products.slice(0, 2);

const mockDispatch = jest.fn()

jest.mock('react-redux', () => {
  return {
    useDispatch: () => {
      return mockDispatch
    }
  }
})

describe('Cart > Unit tests', () => {
  it('should render an empty cart correctly', () => {
    render(<Cart cart={[]} showCart={true} />);

    const titleElement = screen.getByRole('heading', { level: 1 });
    const totalElement = screen.getByTestId('total');
    const cartListElement = screen.getByRole('list');

    expect(titleElement).toHaveTextContent('Carrinho');
    expect(totalElement).toHaveTextContent('$0');
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it('should render a cart with produts', () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElements = screen.getAllByRole('listitem');
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });
});
