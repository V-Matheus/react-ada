import '@testing-library/jest-dom';
import { getByTestId, render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter > Unit tests', () => {
  it('It Should render counter component correctly', () => {
    render(<Counter />);

    const counterElementeValue = screen.getByRole('heading', { level: 1 });
    const increaseButtonElement = screen.getByRole('button', {
      name: 'aumentar',
    });
    const decreaseButtonElement = screen.getByRole('button', {
      name: 'diminuir',
    });

    expect(counterElementeValue).toHaveTextContent('0');
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });

  it('shoud increase counter value when increase button in clicked', () => {
    // Renderizando o component
    render(<Counter />);

    // Clicar no button aumentar
    const counterValueElement = screen.getByRole('heading', { level: 1 });
    const decreseButton = screen.getByRole('button', { name: 'diminuir' });

    userEvent.click(decreseButton);

    // Esperar que o contador seja 1
    expect(counterValueElement).toHaveTextContent('-1');
  });

  it('shoud decrease counter value when increase button in clicked', () => {
    // Renderizando o component
    render(<Counter />);

    // Clicar no button aumentar
    const increseButton = screen.getByRole('button', { name: 'aumentar' });
    userEvent.click(increseButton);

    const counterValueElement = screen.getByText('1', { exact: true });

    // Esperar que o contador seja 1
    expect(counterValueElement).toBeInTheDocument();
  });
});
